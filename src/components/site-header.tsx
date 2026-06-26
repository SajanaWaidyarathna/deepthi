"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#fleet", label: "Fleet" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">


        {/* LOGO */}
        <Link
          href="#home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Deepthi Travels Logo"
            width={55}
            height={55}
            priority
            className="h-[55px] w-auto object-contain"
          />

          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 sm:text-base">
              Deepthi Travels
            </p>
          </div>

        </Link>




        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 text-sm md:flex">

          {navItems.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="
                text-slate-600
                transition
                hover:text-sky-700
              "
            >
              {item.label}
            </Link>

          ))}

        </nav>





        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-slate-800" />
          <span className="h-0.5 w-6 bg-slate-800" />
          <span className="h-0.5 w-6 bg-slate-800" />
        </button>


      </div>





      {/* MOBILE NAV */}
      {open && (

        <nav className="
          border-t
          border-sky-100
          bg-white
          px-6
          py-4
          md:hidden
        ">

          <div className="flex flex-col gap-4 text-sm">


            {navItems.map((item)=>(

              <Link
                key={item.href}
                href={item.href}
                onClick={()=>setOpen(false)}
                className="
                  text-slate-600
                  transition
                  hover:text-sky-700
                "
              >
                {item.label}
              </Link>

            ))}


          </div>


        </nav>

      )}


    </header>
  );
}