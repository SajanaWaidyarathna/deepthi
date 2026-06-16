import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { fleetVehicles, getFleetVehicleBySlug } from "@/lib/fleet";

type FleetDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return fleetVehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}


export default async function FleetDetailPage({
  params,
}: FleetDetailPageProps) {

  const { slug } = await params;

  const vehicle = getFleetVehicleBySlug(slug);


  if (!vehicle) {
    notFound();
  }


  return (
    <main className="min-h-screen bg-sky-50 py-10 sm:py-16 text-slate-900">

      <div className="
        mx-auto w-full max-w-7xl
        px-5 sm:px-6 md:px-8
      ">


        {/* HEADER */}
        <div
          className="
          mb-8 flex flex-col gap-5
          md:flex-row md:items-end
          md:justify-between
          "
        >

          <div className="max-w-3xl">


            <p
              className="
              text-[11px] font-semibold uppercase
              tracking-[0.25em] text-sky-600
              sm:text-xs
              "
            >
              Vehicle detail
            </p>


            <h1
              className="
              mt-3 text-3xl font-bold
              tracking-tight text-slate-900
              sm:text-4xl md:text-6xl
              "
            >
              {vehicle.title}
            </h1>


            <p
              className="
              mt-4 text-sm leading-7
              text-slate-600 sm:text-base
              "
            >
              {vehicle.description}
            </p>


          </div>



          <Link
            href="/fleet"
            className="
            inline-flex h-12 w-full
            items-center justify-center
            rounded-full border border-sky-200
            bg-white px-6 text-sm font-semibold
            text-slate-900 transition
            hover:bg-sky-50
            md:w-auto
            "
          >
            Back to fleet
          </Link>


        </div>





        {/* CONTENT */}
        <section
          className="
          grid gap-6
          lg:grid-cols-[1.15fr_0.85fr]
          "
        >


          {/* IMAGES */}
          <div className="space-y-4">


            {/* MAIN IMAGE */}
            <div
              className="
              relative aspect-[4/3]
              overflow-hidden rounded-[1.5rem]
              border border-sky-100
              bg-white
              sm:aspect-[16/10]
              "
            >

              <Image
                src={vehicle.imageGallery[0]}
                alt={vehicle.title}
                fill
                priority
                sizes="
                (max-width:640px) 100vw,
                55vw
                "
                quality={95}
                className="
                object-cover object-center
                "
              />

            </div>





            {/* GALLERY */}
            <div
              className="
              grid grid-cols-2 gap-3
              sm:grid-cols-3 sm:gap-4
              "
            >

              {vehicle.imageGallery.map((image,index)=>(


                <div
                  key={image}
                  className="
                  relative aspect-[4/3]
                  overflow-hidden rounded-2xl
                  border border-sky-100
                  bg-white
                  "
                >

                  <Image
                    src={image}
                    alt={`${vehicle.title} image ${index + 1}`}
                    fill
                    sizes="
                    (max-width:640px) 50vw,
                    18vw
                    "
                    quality={90}
                    className="
                    object-cover object-center
                    transition duration-500
                    hover:scale-105
                    "
                  />

                </div>


              ))}


            </div>


          </div>







          {/* SIDEBAR */}
          <aside
            className="
            space-y-4
            lg:sticky lg:top-24
            lg:self-start
            "
          >


            {/* OVERVIEW */}
            <div
              className="
              rounded-[1.5rem]
              border border-sky-100
              bg-white p-5
              shadow-sm
              sm:p-6
              "
            >

              <p
                className="
                text-[11px] font-semibold
                uppercase tracking-[0.22em]
                text-sky-600
                "
              >
                {vehicle.meta}
              </p>


              <h2
                className="
                mt-3 text-xl font-semibold
                text-slate-900 sm:text-2xl
                "
              >
                Vehicle overview
              </h2>


              <p
                className="
                mt-3 text-sm leading-7
                text-slate-600
                "
              >
                This vehicle is part of the Deepthi Travels fleet and is
                available for private tours, group journeys, and transfer
                services.
              </p>


            </div>





            {/* DETAILS */}
            <div
              className="
              grid gap-3
              sm:grid-cols-2
              lg:grid-cols-1
              "
            >

              {vehicle.details.map((detail)=>(


                <div
                  key={detail}
                  className="
                  rounded-3xl
                  border border-sky-100
                  bg-white p-5
                  text-sm leading-7
                  text-slate-700 shadow-sm
                  "
                >
                  {detail}
                </div>


              ))}


            </div>





            {/* CAPACITY */}
            <div
              className="
              rounded-[1.5rem]
              border border-sky-100
              bg-white p-5
              shadow-sm sm:p-6
              "
            >

              <p
                className="
                text-[11px] font-semibold
                uppercase tracking-[0.22em]
                text-sky-600
                "
              >
                Capacity
              </p>


              <p
                className="
                mt-3 text-3xl
                font-bold text-slate-900
                "
              >
                {vehicle.capacity}
              </p>


            </div>


          </aside>



        </section>


      </div>

    </main>
  );
}