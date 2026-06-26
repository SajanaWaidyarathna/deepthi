"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Transition } from "framer-motion";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const BASE_SPRING: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
}: Readonly<FocusRailProps>) {

  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];


  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);


  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);



  React.useEffect(() => {
    if (!autoPlay || isHovering) return;

    const timer = setInterval(handleNext, interval);

    return () => clearInterval(timer);

  }, [autoPlay, isHovering, handleNext, interval]);



  const swipeConfidenceThreshold = 10000;

  const swipePower = (
    offset:number,
    velocity:number
  ) => Math.abs(offset) * velocity;



  const onDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    {offset, velocity}: PanInfo
  ) => {

    const swipe = swipePower(
      offset.x,
      velocity.x
    );

    if(swipe < -swipeConfidenceThreshold)
      handleNext();

    else if(
      swipe > swipeConfidenceThreshold
    )
      handlePrev();
  };



  const visibleIndices = [-1,0,1];


  return (

    <div
      className={cn(
        `
        relative
        flex
        min-h-[520px]
        w-full
        flex-col
        overflow-hidden
        bg-sky-50
        text-slate-900
        select-none
        `,
        className
      )}

      onMouseEnter={()=>setIsHovering(true)}
      onMouseLeave={()=>setIsHovering(false)}
    >


      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">

        <AnimatePresence mode="popLayout">

          <motion.div
            key={activeItem.id}
            initial={{opacity:0}}
            animate={{opacity:.25}}
            exit={{opacity:0}}
            transition={{duration:.8}}
            className="absolute inset-0"
          >

            <img
              src={activeItem.imageSrc}
              alt=""
              className="
              h-full
              w-full
              object-cover
              blur-3xl
              "
            />


            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-sky-100
              via-sky-50/70
              to-transparent
            "/>

          </motion.div>

        </AnimatePresence>

      </div>





      <div
        className="
        relative
        z-10
        flex-1
        flex
        flex-col
        justify-center
        px-4
        "
      >



        {/* CAROUSEL */}

        <motion.div
          className="
          relative
          mx-auto
          flex
          h-[300px]
          sm:h-[360px]
          w-full
          max-w-5xl
          items-center
          justify-center
          cursor-grab
          "
          drag="x"
          dragConstraints={{
            left:0,
            right:0
          }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >



        {visibleIndices.map((offset)=>{

          const absIndex = active + offset;
          const index = wrap(0,count,absIndex);

          const item = items[index];

          const center = offset===0;

          return (

          <motion.div

            key={absIndex}

            className={cn(
              `
              absolute
              aspect-[3/4]
              w-[190px]
              xs:w-[220px]
              sm:w-[260px]
              rounded-2xl
              border
              border-sky-100
              bg-white
              shadow-lg
              `,
              center
              ? "z-20"
              : "z-10"
            )}


            animate={{

              x:
              offset *
              (
                typeof window !== "undefined"
                && window.innerWidth < 640
                ? 150
                : 280
              ),

              scale:center?1:.82,

              opacity:center?1:.45,

              rotateY:offset*-15

            }}


            transition={BASE_SPRING}

          >

            <img
              src={item.imageSrc}
              alt={item.title}
              className="
              h-full
              w-full
              rounded-2xl
              object-cover
              "
            />

          </motion.div>

          );

        })}



        </motion.div>






        {/* INFO */}

        <div
          className="
          mx-auto
          mt-8
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          gap-5
          "
        >


          <AnimatePresence mode="wait">

          <motion.div
            key={activeItem.id}
            initial={{
              opacity:0,
              y:10
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              y:-10
            }}
            className="
            text-center
            "
          >

          {activeItem.meta && (
            <p className="
              text-xs
              uppercase
              tracking-wider
              text-sky-600
            ">
              {activeItem.meta}
            </p>
          )}


          <h2 className="
            text-2xl
            sm:text-4xl
            font-bold
          ">
            {activeItem.title}
          </h2>


          {activeItem.description && (
            <p className="
              mt-2
              text-sm
              text-slate-600
            ">
              {activeItem.description}
            </p>
          )}


          </motion.div>

          </AnimatePresence>





          {/* CONTROLS */}

          <div
            className="
            flex
            items-center
            gap-3
            "
          >

          <button
            onClick={handlePrev}
            className="
            rounded-full
            bg-white
            p-3
            shadow
            border
            border-sky-100
            "
          >
            <ChevronLeft size={20}/>
          </button>


          <span className="
            rounded-full
            bg-white
            px-4
            py-2
            text-xs
            shadow
          ">
            {activeIndex+1}/{count}
          </span>


          <button
            onClick={handleNext}
            className="
            rounded-full
            bg-white
            p-3
            shadow
            border
            border-sky-100
            "
          >
            <ChevronRight size={20}/>
          </button>


          {activeItem.href && (

          <Link
            href={activeItem.href}
            className="
            ml-2
            flex
            items-center
            gap-2
            rounded-full
            bg-sky-600
            px-5
            py-3
            text-sm
            text-white
            "
          >
            Explore
            <ArrowUpRight size={15}/>
          </Link>

          )}


          </div>


        </div>


      </div>


    </div>

  );
}