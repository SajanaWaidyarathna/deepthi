import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white">

      <div
        className="
        mx-auto grid max-w-7xl
        gap-6
        px-5 py-8
        sm:px-8
        md:grid-cols-3
        md:gap-10
        "
      >


        {/* LOGO + ABOUT */}
        <div
          className="
          flex flex-col items-center
          md:items-start
          "
        >

          <Image
            src="/logo.jpeg"
            alt="Deepthi Travels Logo"
            width={120}
            height={120}
            className="
            h-20 w-20
            object-contain
            "
          />


          <h2
            className="
            mt-2
            text-lg font-semibold
            text-slate-900
            "
          >
            Deepthi Travels
          </h2>


          <p
            className="
            mt-2 max-w-sm
            text-center
            text-sm leading-5
            text-slate-600
            md:text-left
            "
          >
            Comfortable and reliable tourist transportation
            across Sri Lanka with experienced drivers
            and modern vehicles.
          </p>

        </div>







        {/* CONTACT */}
        <div
          className="
          text-center
          md:text-left
          "
        >

          <h3 className="text-base font-semibold text-slate-900">
            Contact
          </h3>


          <div
            className="
            mt-3 space-y-2
            text-sm text-slate-600
            "
          >

            <p>
              {" "}
              <span className="font-medium text-slate-900">
                +94 76 650 1401
              </span>
            </p>


            <p>
              {" "}
              <span className="font-medium text-slate-900">
                +94 76 979 4983
              </span>
            </p>


            <p className="break-all">
              {" "}
              <span className="font-medium text-slate-900">
                deepthitravels@gmail.com
              </span>
            </p>


            <p>
              {" "}
              <span className="font-medium text-slate-900">
                Gonahena Road, Sri Lanka
              </span>
            </p>


          </div>

        </div>









        {/* LINKS */}
        <div
          className="
          text-center
          md:text-left
          "
        >

          <h3 className="text-base font-semibold text-slate-900">
            Quick Links
          </h3>


          <div
            className="
            mt-3 flex flex-col
            items-center
            gap-2
            text-sm text-slate-600
            md:items-start
            "
          >

            <Link
              href="/"
              className="transition hover:text-sky-600"
            >
              Home
            </Link>


            <Link
              href="/services"
              className="transition hover:text-sky-600"
            >
              Services
            </Link>


            <Link
              href="/fleet"
              className="transition hover:text-sky-600"
            >
              Fleet
            </Link>


            <Link
              href="/contact"
              className="transition hover:text-sky-600"
            >
              Contact
            </Link>

          </div>

        </div>


      </div>







      {/* COPYRIGHT */}
      <div
        className="
        border-t border-sky-100
        px-5 py-3
        text-center
        text-xs
        text-slate-500
        "
      >

        © {new Date().getFullYear()} Deepthi Travels.
        {" "}All rights reserved.

      </div>


    </footer>
  );
}