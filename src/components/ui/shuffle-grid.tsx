"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-sky-50">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_35%),linear-gradient(180deg,_#f0f9ff,_#ffffff)]" />


      <div
        className="
        mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10
        px-5 py-12
        md:grid-cols-[1.05fr_0.95fr]
        md:px-8 md:py-20
        lg:min-h-[calc(100vh-5rem)]
        "
      >


        {/* LEFT CONTENT */}
        <div className="max-w-3xl">

          <span
            className="
            mb-4 inline-flex rounded-full border
            border-sky-200 bg-sky-100 px-4 py-2
            text-[10px] font-semibold uppercase
            tracking-[0.25em] text-sky-700
            sm:text-xs
            "
          >
            Better every journey
          </span>


          <h1
            className="
            text-4xl font-semibold tracking-tight
            text-slate-900
            sm:text-5xl lg:text-7xl
            "
          >
            Travel Sri Lanka in comfort, style, and modern luxury.
          </h1>


          <p
            className="
            mt-5 max-w-2xl text-sm leading-7
            text-slate-600 sm:text-lg sm:leading-8
            "
          >
            Deepthi Travels provides tourist transportation across Sri Lanka,
            private and group tours, airport transfers, day tours,
            multi-day tours, and modern buses and vans with experienced drivers.
          </p>



          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/fleet"
              className="
              inline-flex h-12 items-center justify-center
              rounded-full bg-sky-600 px-6
              text-sm font-medium text-white
              transition hover:bg-sky-700 active:scale-95
              "
            >
              Explore our fleet
            </Link>


            <Link
              href="/services"
              className="
              inline-flex h-12 items-center justify-center
              rounded-full border border-sky-200
              bg-white px-6 text-sm font-medium
              text-slate-900 shadow-sm
              transition hover:bg-sky-50 active:scale-95
              "
            >
              View services
            </Link>

          </div>




          {/* FEATURES */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            {[
              ["Island-wide", "Sri Lanka routes"],
              ["Private trips", "Flexible itineraries"],
              ["Transfers", "Airport pickup & drop"],
            ].map(([title,description]) => (

              <div
                key={title}
                className="
                rounded-2xl border border-sky-100
                bg-white p-4 shadow-sm
                "
              >

                <div className="text-sm font-semibold text-slate-900">
                  {title}
                </div>

                <div className="mt-1 text-xs leading-5 text-slate-600">
                  {description}
                </div>

              </div>

            ))}

          </div>

        </div>





        {/* IMAGE SECTION */}
        <div className="relative">


          <div
            className="
            absolute -inset-3 -z-10 rounded-[2rem]
            bg-gradient-to-br from-sky-200/40
            via-transparent to-sky-100/40 blur-3xl
            "
          />


          <div
            className="
            rounded-[1.5rem] border border-sky-100
            bg-white/70 p-2 shadow-xl
            backdrop-blur-xl sm:p-3
            "
          >


            <div
              className="
              grid h-[26rem] grid-cols-2 gap-2
              overflow-hidden rounded-[1.2rem]
              sm:h-[34rem]
              md:h-[46rem]
              md:grid-cols-3
              "
            >

              {heroImages.map((image,index)=>(


                <motion.div
                  key={image.src}
                  layout
                  transition={{
                    duration:1.1,
                    type:"spring"
                  }}

                  className={cn(
                    "group relative overflow-hidden rounded-xl",
                    "bg-sky-100 shadow-sm",

                    // ONLY desktop gets featured layout
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
                    (min-width:768px) 33vw
                    "

                    className="
                    object-cover object-center
                    transition duration-700
                    group-hover:scale-105
                    "
                  />


                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-sky-900/20
                    via-transparent
                    to-transparent
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
    alt:"Luxury travel vehicle for Sri Lanka tours",
  },
  {
    src:"/hero/hero-2.jpg",
    alt:"Comfortable airport transfer vehicle",
  },
  {
    src:"/hero/hero-3.jpg",
    alt:"Private tour travel experience",
  },
  {
    src:"/hero/hero-4.jpg",
    alt:"Modern van interior for group travel",
  },
  {
    src:"/hero/hero-5.jpg",
    alt:"Day tour transport for Sri Lanka sightseeing",
  },
  {
    src:"/hero/hero-6.jpg",
    alt:"Experienced driver and travel vehicle",
  },
];