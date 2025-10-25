import hero_image from "@/assets/hero.jpg";
import eye from "@/assets/eye.png";
import { Activity, CircleDot, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      <div className="absolute z-50 -left-14 bottom-40 lg:block hidden ">
        <Image
          src={eye}
          alt="eye"
          width={1000}
          height={1000}
          className="w-52"
        />
      </div>
      <div className="absolute z-50 -right-10 top-30 lg:block hidden ">
        <Image
          src={eye}
          alt="eye"
          width={1000}
          height={1000}
          className="w-52"
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${hero_image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          width: "100%",
        }}
        className="absolute inset-0 hero_bottom_curve"
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-80" />
        <div className="relative h-full z-10 flex items-center justify-center text-gray-100">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-green-500" />
              <h3 className="font-bangla text-sm lg:text-base text-green-500">
                বরিশাল আধুনিক চক্ষু হাসপাতাল
              </h3>
              <Activity className="w-4 h-4 text-green-500" />
            </div>

            <h1 className="text-3xl lg:text-5xl font-bangla font-black max-w-xl text-center leading-12 lg:leading-16">
              আধুনিক চক্ষু চিকিৎসা সেবা প্রদানকারী একটি নির্ভরযোগ্য প্রতিষ্ঠান
            </h1>

            <div className="bg-brand rounded-sm hover:bg-brand/90 transition duration-200 mt-2 lg:mt-0 mb-20">
              <Link href="/contact" className="grid grid-cols-3">
                <h3 className="font-bangla text-gray-100 col-span-2 py-2 px-3">
                  আমাদের সম্পর্কে আরও
                </h3>
                <span className="col-span-1 bg-white m-[2px] rounded-sm flex items-center justify-center">
                  <MoveRight className="text-brand w-6 h-6 p-[2px]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 container mx-auto w-full">
        <div className="relative bg-white px-4 py-7 rounded-md shadow-lg flex items-center justify-center lg:gap-5 gap-3 flex-col lg:flex-row">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg">
            <div className="bg-brand text-white px-3 py-1 rounded-md relative inline-block">
              <h3 className="font-bangla z-20 relative text-xs text-center lg:text-base lg:text-right">
                চক্ষু চিকিৎসা সেবা ও ছানিরোগী বাছাই ক্যাম্প
              </h3>
              <div className="absolute w-5 h-5 bg-brand left-1/2 -translate-x-1/2 -bottom-[6px] rotate-45 z-10"></div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <CircleDot className="w-4 h-4 text-brand" />
            <h3 className="text-xs font-bangla">
              বিনা ভিজিটে চোখের প্রাথমিক চিকিৎসা
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot className="w-4 h-4 text-brand" />
            <h3 className="text-xs font-bangla">
              বিনামূল্যে চোখের পাওয়ার পরীক্ষা করার ব্যবস্থা
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot className="w-4 h-4 text-brand" />
            <h3 className="text-xs font-bangla">
              সল্পমূল্যে বিদেশি লেন্স সংযোজন
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <CircleDot className="w-4 h-4 text-brand" />
            <h3 className="text-xs font-bangla">
              ডাক্তারি প্রেসক্রিপশন অনুযায়ী চশমা ও ঔষধ
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
