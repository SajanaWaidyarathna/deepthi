import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white">

      <div
        className="
        mx-auto max-w-7xl
        px-5 py-8
        sm:px-8
        "
      >

        <div
          className="
          grid grid-cols-3
          gap-4
          items-start
          "
        >

          {/* LOGO */}
          <div className="flex flex-col items-center">

            <Image
              src="/logo.png"
              alt="Deepthi Travels Logo"
              width={100}
              height={100}
              className="
              h-16 w-16
              object-contain
              "
            />

            <p
              className="
              mt-2
              text-center
              text-xs
              font-semibold
              text-slate-900
              "
            >
              Deepthi Travels
            </p>

          </div>




          {/* CONTACT */}
          <div className="text-center">

            <h3
              className="
              text-sm
              font-semibold
              text-slate-900
              "
            >
              Contact
            </h3>


            <div
              className="
              mt-3
              space-y-2
              text-xs
              text-slate-600
              "
            >

              <p className="whitespace-nowrap">
                +94 76 650 1401
              </p>

              <p className="whitespace-nowrap">
                +94 76 979 4983
              </p>


              <p
                className="
                whitespace-nowrap
                text-[11px]
                "
              >
                deepthitravels.com@gmail.com
              </p>


              <p
                className="
                whitespace-nowrap
                text-[11px]
                "
              >
                deepthitravels2@gmail.com
              </p>

            </div>

          </div>






          {/* LINKS */}
          <div className="text-center">

            <h3
              className="
              text-sm
              font-semibold
              text-slate-900
              "
            >
              Links
            </h3>


            <div
              className="
              mt-3
              flex flex-col
              gap-2
              text-xs
              text-slate-600
              "
            >

              <Link
                href="/"
                className="hover:text-sky-600"
              >
                Home
              </Link>


              <Link
                href="/services"
                className="hover:text-sky-600"
              >
                Services
              </Link>


              <Link
                href="/fleet"
                className="hover:text-sky-600"
              >
                Fleet
              </Link>


              <Link
                href="/contact"
                className="hover:text-sky-600"
              >
                Contact
              </Link>

            </div>

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
        © {new Date().getFullYear()} Deepthi Travels. All rights reserved.
      </div>


    </footer>
  );
}