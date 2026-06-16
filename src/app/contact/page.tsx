import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sky-50">

      <div
        className="
        mx-auto w-full max-w-6xl
        px-5 py-12
        sm:px-6 md:px-8
        md:py-20
        "
      >


        {/* HEADER */}
        <div className="max-w-3xl">

          <p
            className="
            text-[11px] font-semibold uppercase
            tracking-[0.18em] text-sky-600
            sm:text-xs
            "
          >
            Contact
          </p>


          <h1
            className="
            mt-3 text-3xl font-semibold
            tracking-tight text-slate-900
            sm:text-4xl md:text-5xl
            "
          >
            Plan your next trip with Deepthi Travels.
          </h1>


          <p
            className="
            mt-4 text-sm leading-7
            text-slate-600 sm:text-base
            "
          >
            Reach out for airport transfers, private tours, group travel,
            day tours, or custom multi-day itineraries across Sri Lanka.
          </p>

        </div>





        {/* MAIN */}
        <div
          className="
          mt-10 grid gap-6
          lg:grid-cols-2
          "
        >



          {/* FORM */}
          <section
            className="
            rounded-[1.5rem]
            border border-sky-100
            bg-white p-5
            shadow-sm
            sm:p-8
            "
          >

            <h2
              className="
              text-xl font-semibold
              text-slate-900
              sm:text-2xl
              "
            >
              Send us a message
            </h2>


            <p className="mt-2 text-sm text-slate-600">
              Provide your travel details and our team will respond soon.
            </p>



            <form className="mt-6 space-y-4">


              <input
                type="text"
                placeholder="Your Name"
                className="
                h-12 w-full rounded-xl
                border border-sky-100
                px-4 text-sm text-slate-900
                outline-none
                focus:border-sky-400
                "
              />



              <input
                type="email"
                placeholder="Email Address"
                className="
                h-12 w-full rounded-xl
                border border-sky-100
                px-4 text-sm text-slate-900
                outline-none
                focus:border-sky-400
                "
              />



              <input
                type="text"
                placeholder="Phone / WhatsApp"
                className="
                h-12 w-full rounded-xl
                border border-sky-100
                px-4 text-sm text-slate-900
                outline-none
                focus:border-sky-400
                "
              />



              <textarea
                rows={5}
                placeholder="Your travel requirements..."
                className="
                w-full rounded-xl
                border border-sky-100
                px-4 py-3 text-sm
                text-slate-900
                outline-none
                focus:border-sky-400
                "
              />



              <button
                type="submit"
                className="
                h-12 w-full rounded-full
                bg-sky-600 text-sm font-semibold
                text-white transition
                hover:bg-sky-700 active:scale-95
                "
              >
                Send Inquiry
              </button>


            </form>


          </section>








          {/* RIGHT */}
          <aside className="space-y-5">


            {/* CONTACT INFO */}
            <div
              className="
              rounded-[1.5rem]
              border border-sky-100
              bg-white p-5
              shadow-sm sm:p-8
              "
            >

              <h3
                className="
                text-xl font-semibold
                text-slate-900
                "
              >
                Contact Information
              </h3>



              <div className="mt-5 divide-y divide-sky-100">


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

                  <p className="mt-1 text-sm font-semibold text-slate-900 break-all sm:text-base">
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

            <div
              className="
              rounded-[1.5rem]
              border border-sky-100
              bg-white p-5
              shadow-sm sm:p-8
              "
            >

              <h3 className="text-xl font-semibold text-slate-900">
                Services
              </h3>


              <div className="mt-5 grid gap-3 text-sm text-slate-600">


                {[
                  "Airport Transfers",
                  "Private Tours",
                  "Group Travel",
                  "Day & Multi-day Tours",
                ].map((item)=>(
                  <div
                    key={item}
                    className="
                    rounded-xl bg-sky-50
                    p-3
                    "
                  >
                    {item}
                  </div>
                ))}


              </div>


            </div>


          </aside>


        </div>









        {/* FOOTER BRAND */}

        <div
          className="
          mt-14 border-t border-sky-200
          pt-10
          md:mt-20 md:pt-12
          "
        >


          <div
            className="
            flex flex-col items-center
            gap-6
            md:flex-row
            md:justify-between
            "
          >


            <Image
              src="/logo.jpeg"
              alt="Deepthi Travels Logo"
              width={260}
              height={260}
              className="
              h-32 w-32
              object-contain
              sm:h-40 sm:w-40
              "
            />



            <div
              className="
              max-w-xl text-center
              md:text-left
              "
            >

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