import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-sky-200 bg-white">


      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">


        <div
          className="
            grid
            grid-cols-3
            gap-8
            items-center
          "
        >



          {/* LOGO */}
          <div
            className="
              flex
              flex-col
              items-center
            "
          >

            <Image
              src="/logo.png"
              alt="Deepthi Travels Logo"
              width={90}
              height={90}
              className="
                h-16
                w-16
                object-contain
              "
            />


            <p
              className="
                mt-2
                text-sm
                font-semibold
                text-slate-900
              "
            >
              Deepthi Travels
            </p>


            <p
              className="
                mt-1
                text-[11px]
                text-slate-500
              "
            >
              Your journey, our responsibility
            </p>


          </div>






          {/* CONTACT */}
          <div
            className="
              border-x
              border-sky-100
              px-8
            "
          >

            <h3
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-sky-700
              "
            >
              Contact
            </h3>




            <div
              className="
                space-y-3
                text-xs
                text-slate-600
              "
            >


              <div className="flex gap-3">

                <Phone
                  size={14}
                  className="text-sky-600 shrink-0"
                />

                <p>
                  <span className="font-semibold text-slate-800">
                    Telephone:
                  </span>{" "}
                  +94 76 650 1401 / +94 76 979 4983
                </p>

              </div>




              <div className="flex gap-3">

                <Mail
                  size={14}
                  className="text-sky-600 shrink-0"
                />

                <p className="break-all">

                  <span className="font-semibold text-slate-800">
                    Email:
                  </span>{" "}
                  deepthitravels.com@gmail.com /
                  deepthitravels2@gmail.com

                </p>

              </div>



            </div>


          </div>









          {/* LINKS */}
          <div
            className="
              flex
              flex-col
              items-center
            "
          >


            <h3
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-sky-700
              "
            >
              Quick Links
            </h3>



            <div
              className="
                flex
                flex-col
                gap-2
                text-xs
                text-slate-600
              "
            >

              <Link
                href="/"
                className="
                  flex
                  items-center
                  gap-1
                  hover:text-sky-600
                  transition
                "
              >
                <ArrowRight size={12}/>
                Home
              </Link>


              <Link
                href="/services"
                className="
                  flex
                  items-center
                  gap-1
                  hover:text-sky-600
                  transition
                "
              >
                <ArrowRight size={12}/>
                Services
              </Link>


              <Link
                href="/fleet"
                className="
                  flex
                  items-center
                  gap-1
                  hover:text-sky-600
                  transition
                "
              >
                <ArrowRight size={12}/>
                Fleet
              </Link>


              <Link
                href="/contact"
                className="
                  flex
                  items-center
                  gap-1
                  hover:text-sky-600
                  transition
                "
              >
                <ArrowRight size={12}/>
                Contact
              </Link>


            </div>


          </div>



        </div>


      </div>







      {/* COPYRIGHT */}

      <div
        className="
          border-t
          border-sky-100
          bg-sky-50/50
          py-3
          text-center
          text-xs
          text-slate-500
        "
      >

        © {new Date().getFullYear()} Deepthi Travels.
        All rights reserved.

      </div>


    </footer>
  );
}