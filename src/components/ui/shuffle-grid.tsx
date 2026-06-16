"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
 return (
  <section className="relative isolate overflow-hidden bg-sky-50">
    {/* Background */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_35%),linear-gradient(180deg,_#f0f9ff,_#ffffff)]" />

    <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20 lg:py-24">
      
      {/* LEFT CONTENT */}
      <div className="max-w-3xl">
        <span className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
          Better every journey
        </span>

        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Travel Sri Lanka in comfort, style, and modern luxury.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Deepthi Travels provides tourist transportation across Sri Lanka,
          private and group tours, airport transfers, day tours, multi-day tours,
          and modern buses and vans with experienced drivers.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/fleet"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full bg-sky-600 px-6 text-sm font-medium text-white",
              "transition-all hover:bg-sky-700 active:scale-95"
            )}
          >
            Explore our fleet
          </Link>

          <Link
            href="/services"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-full border border-sky-200 bg-white px-6 text-sm font-medium text-slate-900 shadow-sm",
              "transition-all hover:bg-sky-50 active:scale-95"
            )}
          >
            View services
          </Link>
        </div>

        {/* FEATURES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Island-wide", "Sri Lanka routes"],
            ["Private trips", "Flexible itineraries"],
            ["Transfers", "Airport pickup & drop"],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">
                {title}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE GRID */}
      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-200/40 via-transparent to-sky-100/40 blur-3xl" />

        <div className="rounded-[2rem] border border-sky-100 bg-white/70 p-3 shadow-xl backdrop-blur-xl">
          <div className="grid h-[38rem] grid-cols-2 gap-3 overflow-hidden rounded-[1.6rem] sm:grid-cols-3 md:h-[46rem]">
            {heroImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                transition={{ duration: 1.1, type: "spring" }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-sky-100 shadow-sm",
                  index === 0 && "sm:col-span-2 sm:row-span-2"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 via-transparent to-transparent" />
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
    src: "/hero/hero-1.jpg",
    alt: "Luxury travel vehicle for Sri Lanka tours",
  },
  {
    src: "/hero/hero-2.jpg",
    alt: "Comfortable airport transfer vehicle",
  },
  {
    src: "/hero/hero-3.jpg",
    alt: "Private tour travel experience",
  },
  {
    src: "/hero/hero-4.jpg",
    alt: "Modern van interior for group travel",
  },
  {
    src: "/hero/hero-5.jpg",
    alt: "Day tour transport for Sri Lanka sightseeing",
  },
  {
    src: "/hero/hero-6.jpg",
    alt: "Experienced driver and travel vehicle",
  },
];

const ShuffleGrid = () => {
  const [images, setImages] = useState(heroImages);

  useEffect(() => {
    const swapPairs: Array<[number, number]> = [
      [0, 5],
      [1, 4],
      [2, 3],
    ];

    let pairIndex = 0;

    const intervalId = setInterval(() => {
      const [firstIndex, secondIndex] = swapPairs[pairIndex];

      setImages((currentImages) => swapImages(currentImages, firstIndex, secondIndex));

      pairIndex = (pairIndex + 1) % swapPairs.length;
    }, 3200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid h-[450px] grid-cols-2 gap-3 sm:grid-cols-3 md:h-[520px]">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          layout
          animate={{
            y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0],
            rotate: getRotateFrames(index),
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 7 + index * 0.3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={cn(
            "group relative overflow-hidden rounded-2xl bg-muted shadow-lg shadow-stone-950/5",
            index === 0 && "sm:col-span-2 sm:row-span-2",
            index === 1 && "sm:translate-y-3",
            index === 2 && "sm:-translate-y-4",
            index === 3 && "sm:translate-y-2",
            index === 4 && "sm:-translate-y-3",
            index === 5 && "sm:translate-y-4"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index < 2}
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </motion.div>
      ))}
    </div>
  );
};

const swapImages = (
  images: typeof heroImages,
  firstIndex: number,
  secondIndex: number,
) => {
  const nextImages = [...images];
  [nextImages[firstIndex], nextImages[secondIndex]] = [
    nextImages[secondIndex],
    nextImages[firstIndex],
  ];

  return nextImages;
};

const getRotateFrames = (index: number) => {
  if (index === 0) {
    return [0, 1.5, 0];
  }

  if (index % 3 === 0) {
    return [0, -1.5, 0];
  }

  return [0, 1, 0];
};
