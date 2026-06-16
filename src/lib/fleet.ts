import type { FocusRailItem } from "@/components/ui/focus-rail";

export type FleetVehicle = FocusRailItem & {
  slug: string;
  capacity: string;
  imageGallery: string[];
  details: string[];
};

export const fleetVehicles: FleetVehicle[] = [
  {
    id: 1,
    slug: "kdh-highroof-van",
    title: "KDH highroof van",
    description:
      "Perfect for family vacations and small group tours with comfortable adjustable seating.",
    meta: "13 passengers",
    imageSrc: "/fleet/vehicle-1/hero.jpg",
    capacity: "13 passengers",
    imageGallery: [
      "/fleet/vehicle-1/hero.jpg",
      "/fleet/vehicle-1/side.jpg",
      "/fleet/vehicle-1/interior.jpg",
    ],
    details: [
      "Perfect for family vacations and small group tours",
      "Modern air-conditioned cabin with comfortable and adjustable seating",
      "Ideal for relaxed island travel with luggage space",
    ],
  },
  {
    id: 2,
    slug: "37-seater-underluggage-bus",
    title: "37-seater underluggage bus",
    description:
      "Designed for larger group travel with comfortable seating and long-distance touring in mind.",
    meta: "37 passengers",
    imageSrc: "/fleet/vehicle-2/hero.jpg",
    capacity: "37 passengers",
    imageGallery: [
      "/fleet/vehicle-2/hero.jpg",
      "/fleet/vehicle-2/side.jpg",
      "/fleet/vehicle-2/interior.jpg",
    ],
    details: [
      "Comfortable for long journeys and tour groups",
      "Excellent for school trips and large group travel",
      "Extra luggage support for extended routes",
    ],
  },
  {
    id: 3,
    slug: "41-seater-underluggage-bus",
    title: "41 seater underluggage bus",
    description:
      "Ideal for airport transfers, city routes, and group tours with extra luggage space.",
    meta: "41 passengers",
    imageSrc: "/fleet/vehicle-3/hero.jpg",
    capacity: "41 passengers",
    imageGallery: [
      "/fleet/vehicle-3/hero.jpg",
      "/fleet/vehicle-3/side.jpg",
      "/fleet/vehicle-3/interior.jpg",
    ],
    details: [
      "Designed for punctual airport pick-ups and drop-offs",
      "Spacious interior for bags and carry-ons",
      "Smooth ride for short city transfers",
    ],
  },
  {
    id: 4,
    slug: "27-seater-mini-coach",
    title: "27 seater mini coach",
    description:
      "A versatile mid-size option for sightseeing, day tours, and flexible route planning.",
    meta: "27 passengers",
    imageSrc: "/fleet/vehicle-4/hero.jpg",
    capacity: "27 passengers",
    imageGallery: [
      "/fleet/vehicle-4/hero.jpg",
      "/fleet/vehicle-4/side.jpg",
      "/fleet/vehicle-4/interior.jpg",
    ],
    details: [
      "Suitable for sightseeing and flexible routes",
      "Good balance of comfort and space",
      "Ideal for couples, families, and small groups",
    ],
  },

  // NEW VEHICLE
  {
    id: 5,
    slug: "long-couch-bus",
    title: "Long couch bus",
    description:
      "Spacious long-distance coach bus designed for comfortable group travel, tours, and corporate transport across Sri Lanka.",
    meta: "Luxury coach bus",
    imageSrc: "/fleet/vehicle-5/hero.jpg",
    capacity: "27 passengers",
    imageGallery: [
      "/fleet/vehicle-5/hero.jpg",
      "/fleet/vehicle-5/side.jpg",
      "/fleet/vehicle-5/interior.jpg",
    ],
    details: [
      "Extra-long coach for large group travel",
      "Comfortable reclining seats for long journeys",
      "Ideal for corporate events, tours, and pilgrimages",
    ],
  },
];

export function getFleetVehicleBySlug(slug: string) {
  return fleetVehicles.find((vehicle) => vehicle.slug === slug);
}