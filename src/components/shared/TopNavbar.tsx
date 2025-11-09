import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { headers } from "next/headers";

const TopNavbar = async () => {
  const headersList = headers();
  const currentPath =
    (await headersList).get("x-invoke-path") ||
    (await headersList).get("x-invoke-url") ||
    "";
  const pathname = new URL(currentPath, "http://localhost:3000").pathname;
  if (pathname !== "/") return null;

  return (
    <div className="text-white text-sm">
      <div className="container mx-auto bg-brand border border-brand clip-banner">
        <div className="flex flex-wrap md:flex-row justify-center items-center gap-3 md:gap-8 py-1 px-6 text-[13px] ">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>০১৭০৮-৪৪৫৩৬৩</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info.baeh@gmail.com</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-bangla">২৪/৭ খোলা</span>
          </div>

          <div className="w-[1px] h-4 bg-white opacity-50"></div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="font-bangla">
              ১ নং সি এন্ড বি পোল, সি এন্ড বি রোড, বরিশাল, বাংলাদেশ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
