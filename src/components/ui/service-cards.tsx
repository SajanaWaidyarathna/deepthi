"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Position = "front" | "middle" | "back";

interface ServiceCardProps {
  handleShuffle: () => void;
  service: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
  position: Position;
}


export function ServiceCard({
  handleShuffle,
  service,
  position,
}: ServiceCardProps) {


  const dragRef = React.useRef(0);

  const isFront = position === "front";


  return (

    <motion.div

      style={{
        zIndex:
          position === "front"
            ? 2
            : position === "middle"
            ? 1
            : 0,
      }}


      animate={{
        rotate:
          position === "front"
            ? "-5deg"
            : position === "middle"
            ? "0deg"
            : "5deg",


        x:
          position === "front"
            ? "0%"
            : position === "middle"
            ? "25%"
            : "50%",
      }}


      drag={true}

      dragListener={isFront}

      dragElastic={0.35}


      dragConstraints={{
        top:0,
        left:0,
        right:0,
        bottom:0
      }}


      onDragStart={(e:any)=>{

        dragRef.current = e.clientX;

      }}


      onDragEnd={(e:any)=>{

        if(
          dragRef.current - e.clientX > 120
        ){
          handleShuffle();
        }

        dragRef.current=0;

      }}


      transition={{
        duration:.35
      }}


      className={`
        absolute
        left-0
        top-0

        h-[430px]
        w-[310px]

        md:h-[460px]
        md:w-[350px]

        overflow-hidden

        rounded-3xl

        border
        border-sky-200

        bg-white

        shadow-xl

        ${
          isFront
          ? "cursor-grab active:cursor-grabbing"
          :""
        }
      `}

    >


      <div className="relative h-44 w-full">

        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />

      </div>



      <div className="p-5">


        <h2
          className="
          text-lg
          font-bold
          text-slate-900
          "
        >
          {service.title}
        </h2>



        <p
          className="
          mt-2
          text-sm
          leading-6
          text-slate-600
          "
        >
          {service.description}
        </p>




        <ul className="mt-4 space-y-2">

          {service.features.map((item)=>(

            <li
              key={item}
              className="
              flex
              gap-2
              text-xs
              text-slate-700
              "
            >

              <span
                className="
                mt-1
                h-1.5
                w-1.5
                rounded-full
                bg-sky-500
                "
              />

              {item}

            </li>

          ))}

        </ul>



      </div>



    </motion.div>

  );
}