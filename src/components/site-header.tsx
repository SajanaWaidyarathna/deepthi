"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">

          {/* NO BOX — direct image */}
          <Image
            src="/logo.jpeg"
            alt="Deepthi Travels Logo"
            width={60}
            height={60}
            priority
            className="h-[60px] w-auto object-contain"
          />

          {/* BRAND TEXT */}
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-900">
              Deepthi Travels
            </p>
            <p className="text-xs text-slate-500">
            </p>
          </div>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition ${
                  isActive
                    ? "text-sky-700 font-medium"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-sky-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}