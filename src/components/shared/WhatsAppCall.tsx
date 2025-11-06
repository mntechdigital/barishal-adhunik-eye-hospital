/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Phone } from "lucide-react";

export default function WhatsAppCall({ phoneNumber }: any) {
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/+8801708445363`;
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppRedirect}
      className="cursor-pointer inline-flex items-center justify-between gap-0 bg-green-600 hover:bg-green-700 transition-colors rounded-full px-3 pl-1 py-1 shadow-lg hover:shadow-xl border-2 border-white"
    >
      <div className="flex items-center justify-center size-8 bg-white rounded-full mr-2">
        <Phone className="size-6 text-green-600" />
      </div>
      <span className="text-white">{phoneNumber}</span>
    </div>
  );
}
