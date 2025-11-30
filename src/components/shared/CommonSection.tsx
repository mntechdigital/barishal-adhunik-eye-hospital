import { ChevronsRight, Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import WhatsAppCall from "./WhatsAppCall";

const CommonSection = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/commonheroimage.png")',
        backgroundSize: "cover",
        backgroundPosition: "100% 0%",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "darken",
        position: "relative",
        marginBottom: "30px",
      }}
    >
      <p className="font-bangla text-white absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 rotate-[-90deg]">
        ২৪/৭ জরুরি পরিষেবা
      </p>

      <h2 className="text-xl md:text-4xl font-bold mb-2 font-bangla">
        {title}
      </h2>
      <div className="flex justify-center items-center gap-1">
        <Link href="/" className="font-bangla text-green-700">
          <span>হোম</span>
        </Link>
        <span>
          <ChevronsRight />
        </span>
        <span className="font-bangla">{title}</span>
      </div>
      <div className="flex items-center gap-10 justify-center md:justify-between w-full md:w-4xl absolute bottom-[-20px] left-1/2 -translate-x-1/2">
        <a
          href="https://www.facebook.com/share/17akTjXWhM/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-0 bg-green-600 hover:bg-green-700 transition-colors rounded-full px-7 pr-1 py-1 shadow-lg hover:shadow-xl border-2 border-white"
        >
          <span className="text-white">Follow Us</span>
          <div className="flex items-center justify-center size-8 bg-white rounded-full ml-2">
            <Facebook className="size-6 text-green-600" />
          </div>
        </a>
        
        <WhatsAppCall phoneNumber="01708445363" />
      </div>
    </div>
  );
};

export default CommonSection;
