"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const TopNavbar = () => {
  const pathname = usePathname();

  // Only show on home page
  if (pathname !== "/") return null;

  return (
    <div className="text-white text-sm">
      <div className="container mx-auto bg-green-700 ">
        <div className="flex justify-center items-center gap-4 py-2 px-6 text-[13px]">
 
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>01708-445363</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>


          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info.baeh@gmail.com</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>


          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Always Open</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="font-bangla">
              ১ নং C & B পুল, C & B রোড, বরিশাল, বাংলাদেশ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
