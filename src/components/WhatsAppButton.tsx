"use client";

import Image from "next/image";

export function WhatsAppButton() {

  const phoneNumber = "94766501401"; // remove + and spaces
  const message = "Hello Deepthi Travels, I would like to know more about your services.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed bottom-5 right-5 z-50
      flex h-14 w-14 items-center justify-center
      rounded-full
      bg-green-500
      shadow-lg
      transition
      hover:scale-110
      hover:bg-green-600
      active:scale-95
      "
      aria-label="Chat on WhatsApp"
    >

      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={34}
        height={34}
        className="h-8 w-8"
      />

    </a>
  );
}