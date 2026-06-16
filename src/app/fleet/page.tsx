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
  <main className="min-h-screen bg-sky-50 py-16 text-slate-900">
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
          Fleet
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl text-slate-900">
          Explore the fleet in a cinematic rail.
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          Drag, scroll, or use the arrows to move through the vehicle lineup.
          Use Explore to open a dedicated vehicle page with more images and details.
        </p>
      </div>

        <FocusRail items={railItems} autoPlay interval={4500} loop className="rounded-[2rem]" />
      </div>
    </main>
  );
}
