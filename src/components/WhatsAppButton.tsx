"use client";

import Image from "next/image";

export function WhatsAppButton() {

  const phoneNumber = "94766501401";
  const message =
    "Hello Deepthi Travels, I would like to know more about your services.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed bottom-5 right-5 z-50
      group
      flex h-16 w-16 items-center justify-center
      rounded-full
      bg-green-500
      shadow-xl
      transition-all
      duration-300
      hover:scale-110
      hover:bg-green-600
      active:scale-95
      animate-bounce
      "
      aria-label="Chat on WhatsApp"
    >

      {/* pulse ring */}
      <span
        className="
        absolute inset-0
        rounded-full
        bg-green-400
        opacity-50
        animate-ping
        "
      />


      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={42}
        height={42}
        className="
        relative z-10
        h-10 w-10
        transition-transform
        duration-300
        group-hover:rotate-12
        "
      />

    </a>
  );
}