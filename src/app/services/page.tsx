"use client";

import Link from "next/link";
import { useState } from "react";
import { ServiceCard } from "@/components/ui/service-cards";

export default function ServicesPage() {

  const services = [
    {
      title: "Island-wide Tourist Transportation",
      description:
        "Reliable and comfortable transportation across Sri Lanka for tourists, families, and corporate groups. We ensure safe travel with experienced drivers and well-maintained vehicles.",
      image: "/services/image1.jpg",
      features: [
        "Air-conditioned vehicles",
        "Experienced local drivers",
        "Flexible pickup & drop locations",
      ],
    },

    {
      title: "Private & Group Tours",
      description:
        "Customized travel experiences designed around your preferences. Whether you are traveling solo, as a couple, or in a group, we create itineraries that match your style.",
      image: "/services/image2.jpg",
      features: [
        "Fully customizable itineraries",
        "Flexible scheduling",
        "Dedicated tour planning support",
      ],
    },

    {
      title: "Day Tours & Multi-Day Packages",
      description:
        "Explore Sri Lanka’s beaches, mountains, cultural sites, and wildlife through well-planned short and long-duration tour packages.",
      image: "/services/image3.jpg",
      features: [
        "Pre-planned travel routes",
        "Hotel & attraction guidance",
        "Budget-friendly packages",
      ],
    },
  ];



  const [positions, setPositions] = useState([
    "front",
    "middle",
    "back",
  ]);



  const handleShuffle = () => {

    const updated = [...positions];

    updated.unshift(updated.pop()!);

    setPositions(updated);

  };



  return (

    <main className="min-h-screen bg-sky-50">



      {/* HERO */}

          <section
        className="
          mx-auto
          max-w-6xl
          px-5
          py-12
          md:px-8
          md:py-20
        "
      >
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-sky-600
              sm:text-xs
            "
          >
            Services
          </p>


          <h1
            className="
              mt-3
              text-3xl
              font-semibold
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Complete travel solutions across Sri Lanka.
          </h1>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            From airport transfers to full island tours, we provide safe,
            comfortable, and flexible travel services designed for tourists,
            families, and groups.
          </p>

        </div>
      </section>







      {/* SERVICE SHUFFLE CARDS */}

      <section
        className="
        mx-auto
        flex
        max-w-6xl
        justify-center
        px-5
        pb-20
        "
      >


        <div
          className="
          relative
          h-[450px]
          w-[310px]
          sm:w-[650px]
          "
        >


          {services.map((service,index)=>(


            <ServiceCard

              key={service.title}

              service={service}

              position={
                positions[index] as
                "front" |
                "middle" |
                "back"
              }

              handleShuffle={handleShuffle}

            />


          ))}


        </div>


      </section>










      {/* WHY CHOOSE US */}

      <section
        className="
        border-y
        border-sky-100
        bg-white
        "
      >


        <div
          className="
          mx-auto
          max-w-6xl
          px-5
          py-14
          md:px-8
          md:py-16
          "
        >


          <h2
            className="
            text-2xl
            font-semibold
            text-slate-900
            sm:text-3xl
            "
          >
            Why travelers choose Deepthi Travels
          </h2>



          <div
            className="
            mt-8
            grid
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            "
          >


            {[
              [
                "Safe & Reliable",
                "Professional drivers with years of experience",
              ],

              [
                "Comfort First",
                "Modern air-conditioned vehicles for all trips",
              ],

              [
                "Flexible Planning",
                "We adapt to your travel schedule and needs",
              ],

            ].map(([title,desc])=>(


              <div
                key={title}
                className="
                rounded-3xl
                border
                border-sky-100
                bg-sky-50
                p-5
                "
              >


                <h3
                  className="
                  font-semibold
                  text-slate-900
                  "
                >
                  {title}
                </h3>



                <p
                  className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  "
                >
                  {desc}
                </p>


              </div>


            ))}


          </div>


        </div>


      </section>









      {/* CTA */}

      <section
        className="
        mx-auto
        max-w-6xl
        px-5
        py-14
        text-center
        md:px-8
        md:py-20
        "
      >


        <h2
          className="
          text-2xl
          font-semibold
          text-slate-900
          sm:text-3xl
          "
        >
          Ready to explore Sri Lanka?
        </h2>



        <p
          className="
          mt-3
          text-sm
          text-slate-600
          sm:text-base
          "
        >
          Contact us to plan your perfect travel experience.
        </p>




        <Link
          href="/contact"
          className="
          mt-6
          inline-flex
          h-12
          items-center
          justify-center
          rounded-full
          bg-sky-600
          px-8
          text-sm
          font-medium
          text-white
          transition
          hover:bg-sky-700
          active:scale-95
          "
        >
          Book Your Trip
        </Link>



      </section>


    </main>
  );
}