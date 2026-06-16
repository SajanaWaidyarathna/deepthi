"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 to-white">


      {/* soft background glow */}
      <div
        className="
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_45%)]
        "
      />



      <div
        className="
        mx-auto grid max-w-7xl
        grid-cols-1 items-center gap-12
        px-5 py-12
        md:grid-cols-[1fr_0.9fr]
        md:px-8 md:py-20
        lg:min-h-[calc(100vh-5rem)]
        "
      >



        {/* LEFT CONTENT */}
        <div className="max-w-3xl">


          {/* BRAND */}
          <div className="mb-8 flex items-center gap-4">


            <Image
              src="/logo.png"
              alt="Deepthi Travels Logo"
              width={220}
              height={220}
              priority
              className="
              h-24 w-24
              sm:h-32 sm:w-32
              object-contain
              "
            />


            <div>

              <h2
                className="
                text-xl
                font-semibold
                tracking-tight
                text-slate-900
                sm:text-3xl
                "
              >
                Deepthi Travels
              </h2>


              <p
                className="
                mt-1
                text-xs
                text-sky-600
                sm:text-sm
                "
              >
                Sri Lanka Transport & Tours
              </p>

            </div>

          </div>





          {/* LABEL */}
          <p
            className="
            mb-5
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-sky-600
            "
          >
            Travel made simple
          </p>





          {/* TITLE */}
          <h1
            className="
            max-w-2xl
            text-4xl
            font-semibold
            leading-tight
            tracking-tight
            text-slate-900
            sm:text-5xl
            lg:text-6xl
            "
          >
            Comfortable journeys across Sri Lanka.
          </h1>





          {/* DESCRIPTION */}
          <p
            className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            "
          >
            Deepthi Travels provides reliable transportation,
            private tours, airport transfers, and group travel
            with comfortable vehicles and experienced drivers.
          </p>





          {/* BUTTONS */}
          <div
            className="
            mt-8
            flex flex-col gap-3
            sm:flex-row
            "
          >

            <Link
              href="/fleet"
              className="
              flex h-12 items-center justify-center
              rounded-full
              bg-sky-600
              px-7
              text-sm
              font-medium
              text-white
              transition
              hover:bg-sky-700
              "
            >
              Explore Fleet
            </Link>


            <Link
              href="/services"
              className="
              flex h-12 items-center justify-center
              rounded-full
              border border-sky-200
              bg-white
              px-7
              text-sm
              font-medium
              text-slate-800
              transition
              hover:bg-sky-50
              "
            >
              Services
            </Link>

          </div>





          {/* FEATURES */}
          <div
            className="
            mt-10
            grid gap-3
            sm:grid-cols-3
            "
          >

            {[
              ["Island-wide", "Travel routes"],
              ["Private trips", "Flexible plans"],
              ["Transfers", "Airport service"],
            ].map(([title, desc]) => (

              <div
                key={title}
                className="
                rounded-xl
                border border-sky-100
                bg-white
                p-4
                "
              >

                <p className="text-sm font-semibold text-slate-900">
                  {title}
                </p>


                <p className="mt-1 text-xs text-slate-600">
                  {desc}
                </p>

              </div>

            ))}

          </div>


        </div>







        {/* IMAGE GRID */}
        <div className="relative">


          <div
            className="
            absolute
            -inset-4
            -z-10
            rounded-[2rem]
            bg-sky-200/30
            blur-3xl
            "
          />



          <div
            className="
            rounded-3xl
            border border-sky-100/70
            bg-white/90
            p-3
            shadow-md
            "
          >


            <div
              className="
              grid
              h-[26rem]
              grid-cols-2
              gap-3
              overflow-hidden
              rounded-2xl
              sm:h-[34rem]
              md:h-[42rem]
              md:grid-cols-3
              "
            >


              {heroImages.map((image,index)=>(


                <motion.div
                  key={image.src}
                  layout
                  transition={{
                    duration:1,
                    type:"spring"
                  }}

                  className={cn(
                    "relative overflow-hidden rounded-xl",
                    index === 0 &&
                    "md:col-span-2 md:row-span-2"
                  )}
                >


                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index < 2}
                    sizes="
                    (max-width:640px) 50vw,
                    33vw
                    "
                    className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                    "
                  />

                </motion.div>


              ))}


            </div>


          </div>


        </div>



      </div>


    </section>
  );
};




const heroImages = [
  {
    src:"/hero/hero-1.jpg",
    alt:"Luxury travel vehicle",
  },
  {
    src:"/hero/hero-2.jpg",
    alt:"Airport transfer vehicle",
  },
  {
    src:"/hero/hero-3.jpg",
    alt:"Private tour travel",
  },
  {
    src:"/hero/hero-4.jpg",
    alt:"Vehicle interior",
  },
  {
    src:"/hero/hero-5.jpg",
    alt:"Sri Lanka sightseeing transport",
  },
  {
    src:"/hero/hero-6.jpg",
    alt:"Travel service vehicle",
  },
];