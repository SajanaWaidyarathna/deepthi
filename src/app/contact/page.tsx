import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 md:px-8 md:py-20">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-500 sm:text-xs">
            Contact Us
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Plan your next trip with{" "}
            <span className="text-sky-600">Deepthi Travels.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Reach out for airport transfers, private tours, group travel, day
            tours, or custom multi-day itineraries across Sri Lanka.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* FORM */}
          <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Share your travel details and we'll get back to you shortly.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-12 w-full rounded-xl border border-sky-100 bg-sky-50/50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-full rounded-xl border border-sky-100 bg-sky-50/50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <input
                type="text"
                placeholder="Phone / WhatsApp"
                className="h-12 w-full rounded-xl border border-sky-100 bg-sky-50/50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your travel plans…"
                className="w-full rounded-xl border border-sky-100 bg-sky-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
              />

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-sky-600 text-sm font-semibold text-white transition hover:bg-sky-700 active:scale-95"
              >
                Send Inquiry
              </button>
            </form>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-5">

            {/* CONTACT INFO */}
          <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
            <p className="mt-1 text-sm text-slate-500">We're available 7 days a week.</p>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Phone</p>
                <div className="mt-2 flex flex-col gap-1">
                  <a href="tel:+94766501401" className="text-sm font-medium text-slate-900 hover:text-sky-600 transition">
                    +94 76 650 1401
                  </a>
                  <a href="tel:+94769794983" className="text-sm font-medium text-slate-900 hover:text-sky-600 transition">
                    +94 76 979 4983
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">WhatsApp</p>
                
                 <a href="https://wa.me/94766501401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.25 4.8L2.05 22l5.4-1.41c1.37.73 2.9 1.14 4.54 1.14h.04c5.46 0 9.91-4.45 9.91-9.91C21.94 6.45 17.5 2 12.04 2zm4.95 14.1c-.21.59-1.22 1.13-1.68 1.2-.43.07-.97.1-1.57-.1-.36-.12-.82-.28-1.4-.55-2.46-1.06-4.07-3.53-4.19-3.69-.12-.17-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98.21-.24.46-.3.62-.3l.44.01c.14 0 .33-.05.52.4l.67 1.65c.06.14.1.3.02.48l-.25.46-.37.43c-.12.13-.25.28-.1.54.14.25.63 1.04 1.36 1.69.93.83 1.72 1.09 1.97 1.21.25.12.4.1.55-.06l.63-.74c.16-.2.31-.13.52-.08l1.64.77c.19.09.32.14.37.22.04.08.04.48-.17 1.07z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Email</p>
                <div className="mt-2 flex flex-col gap-1">
                  <a href="mailto:deepthitravels.com@gmail.com" className="text-sm font-medium text-slate-900 hover:text-sky-600 transition break-all">
                    deepthitravels.com@gmail.com
                  </a>
                  <a href="mailto:deepthitravels2@gmail.com" className="text-sm font-medium text-slate-900 hover:text-sky-600 transition">
                    deepthitravels2@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Location</p>
                <p className="mt-2 text-sm font-medium text-slate-900">441, 1/Gonahena, Kadawatha</p>
              </div>

            </div>
          </div>

            {/* SERVICES */}
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">Services</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Airport Transfers", icon: "" },
                  { label: "Private Tours", icon: "" },
                  { label: "Group Travel", icon: "" },
                  { label: "Day & Multi-day Tours", icon: "" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl bg-sky-50 p-3 text-sm font-medium text-slate-700"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* FOOTER BRAND */}
        <div className="mt-14 border-t border-sky-200 pt-10 md:mt-20 md:pt-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">

            <Image
              src="/logo.png"
              alt="Deepthi Travels Logo"
              width={260}
              height={260}
              className="h-32 w-32 object-contain sm:h-40 sm:w-40"
            />

            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-semibold text-slate-900">
                Deepthi Travels
              </h2>
              <p className="mt-1 text-sm font-medium text-sky-600">
                Sri Lanka Transport & Tour Services
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Deepthi Travels provides safe, comfortable and reliable
                transportation throughout Sri Lanka. From airport transfers to
                private tours and group journeys, we help travelers enjoy a
                smooth and memorable travel experience.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}