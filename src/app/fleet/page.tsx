import { FocusRail } from "@/components/ui/focus-rail";
import { fleetVehicles } from "@/lib/fleet";

export default function FleetPage() {
  const railItems = fleetVehicles.map((vehicle) => ({
    id: vehicle.id,
    title: vehicle.title,
    description: vehicle.description,
    meta: vehicle.meta,
    imageSrc: vehicle.imageSrc,
    href: `/fleet/${vehicle.slug}`,
  }));

  return (
    <main
      className="
      min-h-screen bg-sky-50
      py-10 sm:py-16
      text-slate-900
      "
    >

      <div
        className="
        mx-auto w-full max-w-7xl
        px-5 sm:px-6 md:px-8
        "
      >


        {/* HEADER */}
        <div
          className="
          mx-auto mb-8 max-w-3xl
          text-center
          sm:mb-12
          "
        >

          <p
            className="
            text-[11px] font-semibold
            uppercase tracking-[0.25em]
            text-sky-600
            sm:text-xs
            "
          >
            Fleet
          </p>


          <h1
            className="
            mt-3 text-3xl
            font-bold tracking-tight
            text-slate-900
            sm:text-4xl md:text-6xl
            "
          >
            Explore the fleet in a cinematic rail.
          </h1>


          <p
            className="
            mt-4 text-sm leading-7
            text-slate-600
            sm:text-base
            "
          >
            Drag, scroll, or use the arrows to move through the vehicle lineup.
            Use Explore to open a dedicated vehicle page with more images and
            details.
          </p>


        </div>





        {/* RAIL */}
        <div
          className="
          overflow-hidden rounded-[1.5rem]
          sm:rounded-[2rem]
          "
        >

          <FocusRail
            items={railItems}
            autoPlay
            interval={4500}
            loop
            className="
            rounded-[1.5rem]
            sm:rounded-[2rem]
            "
          />


        </div>


      </div>


    </main>
  );
}