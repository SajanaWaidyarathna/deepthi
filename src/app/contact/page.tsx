import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8 md:py-20">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Plan your next trip with Deepthi Travels.
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Reach out for airport transfers, private tours, group travel,
            day tours, or custom multi-day itineraries across Sri Lanka.
          </p>
        </div>


        {/* MAIN CONTENT */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">


          {/* FORM */}
          <section className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-semibold text-slate-900">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Provide your travel details and our team will respond soon.
            </p>


            <form className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-400"
              />


              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-400"
              />


              <input
                type="text"
                placeholder="Phone / WhatsApp"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-400"
              />


              <textarea
                rows={5}
                placeholder="Your travel requirements..."
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-400"
              />


              <button
                type="submit"
                className="w-full rounded-full bg-sky-600 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Send Inquiry
              </button>

            </form>

          </section>



          {/* RIGHT SIDE */}
          <aside className="space-y-6">


            {/* CONTACT INFO */}

            <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm">

              <h3 className="text-xl font-semibold text-slate-900">
                Contact Information
              </h3>


              <div className="mt-6 divide-y divide-sky-100">


                <div className="py-4">
                  <p className="text-sm font-medium text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-base font-semibold text-slate-900">
                    +94 76 650 1401
                  </p>

                  <p className="text-base font-semibold text-slate-900">
                    +94 76 979 4983
                  </p>
                </div>



                <div className="py-4">
                  <p className="text-sm font-medium text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-base font-semibold text-slate-900">
                    +94 76 650 1401
                  </p>
                </div>



                <div className="py-4">
                  <p className="text-sm font-medium text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-base font-semibold text-slate-900 break-all">
                    deepthitravels@gmail.com
                  </p>
                </div>



                <div className="py-4">
                  <p className="text-sm font-medium text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Gonahena Road, Sri Lanka
                  </p>
                </div>


              </div>

            </div>




            {/* SERVICES */}

            <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm">

              <h3 className="text-xl font-semibold text-slate-900">
                Services
              </h3>


              <div className="mt-5 grid gap-3 text-sm text-slate-600">

                <div className="rounded-xl bg-sky-50 p-3">
                  Airport Transfers
                </div>

                <div className="rounded-xl bg-sky-50 p-3">
                  Private Tours
                </div>

                <div className="rounded-xl bg-sky-50 p-3">
                  Group Travel
                </div>

                <div className="rounded-xl bg-sky-50 p-3">
                  Day & Multi-day Tours
                </div>

              </div>

            </div>


          </aside>

        </div>





        {/* BRAND FOOTER */}

        <div className="mt-20 border-t border-sky-200 pt-12">

          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">


            <div>
              <Image
                src="/logo.jpeg"
                alt="Deepthi Travels Logo"
                width={260}
                height={260}
                className="h-[170px] w-[170px] object-contain"
              />
            </div>



            <div className="max-w-xl text-center md:text-left">

              <h2 className="text-2xl font-semibold text-slate-900">
                Deepthi Travels
              </h2>

              <p className="mt-2 text-sm font-medium text-sky-600">
                Sri Lanka Transport & Tour Services
              </p>


              <p className="mt-4 text-sm leading-7 text-slate-600">

                Deepthi Travels provides safe, comfortable and reliable
                transportation throughout Sri Lanka. From airport transfers
                to private tours and group journeys, we help travelers enjoy
                a smooth and memorable travel experience.

              </p>

            </div>


          </div>

        </div>


      </div>
    </main>
  );
}