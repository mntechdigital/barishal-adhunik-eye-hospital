import hero_image from "@/assets/hero.jpg";
import eye from "@/assets/eye.png";
import { Activity, CircleDot, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div
        style={{
          height: "90vh",
          width: "100%",
        }}
        className="absolute inset-0 hero_bottom_curve"
      >
        <div className="absolute inset-0 w-full h-full bg-[#099c35] opacity-90" />
        <div className="relative h-full z-10 flex items-center justify-center text-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Content */}
              <div className="flex flex-col gap-6 text-left animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-white animate-pulse" />
                  <h3 className="font-bangla text-sm lg:text-base text-white">
                    বরিশাল আধুনিক চক্ষু হাসপাতাল
                  </h3>
                  <Activity className="w-4 h-4 text-white animate-pulse" />
                </div>

                <h1 className="text-3xl lg:text-5xl font-bangla font-black leading-tight lg:leading-snug">
                  আধুনিক চিকিৎসা সেবায় একটি নির্ভরযোগ্য প্রতিষ্ঠান
                </h1>

                <div className="inline-flex w-fit">
                  <Link
                    href="/about"
                    className="relative group rounded-xl p-[2px] bg-gradient-to-r from-green-400 to-brand/90 shadow-md hover:shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-300"
                    aria-label="আমাদের সম্পর্কে আরও জানুন"
                  >
                    {/* Gradient border + glass inner */}
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-5 py-3 transform transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                      <div className="flex flex-col">
                        <span className="font-bangla text-white text-sm leading-tight">
                          আমাদের সম্পর্কে আরও
                        </span>
                        <span className="text-[11px] text-white/70 mt-0.5">
                          বিস্তারিত জানুন
                        </span>
                      </div>

                      <span className="ml-3 flex items-center justify-center w-10 h-10 rounded-md bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-6">
                        <MoveRight className="w-5 h-5 text-white transition-transform" />
                      </span>
                    </div>

                    {/* subtle shimmer on hover */}
                    <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 bg-white/5 blur-md transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen"></span>
                  </Link>
                </div>
              </div>

              {/* Right Side - Hero Image Card */}
              <div className="lg:block animate-fade-in-right">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-brand rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300 hover:scale-105">
                    <Image
                      src={hero_image}
                      alt="Barishal Modern Eye Hospital"
                      className="w-full h-[300px] object-cover rounded-lg"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-2">
                        <Image
                          src={eye}
                          alt="Eye"
                          width={40}
                          height={40}
                          className="animate-bounce"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 container mx-auto w-full">
        <div className="relative bg-white px-4 py-7 rounded-md shadow-lg flex items-center justify-center lg:gap-5 gap-3 flex-col lg:flex-row">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg">
            <div className="bg-brand text-white px-3 py-1 rounded-md relative inline-block">
              <h3 className="font-bangla z-20 relative text-xs text-center lg:text-base lg:text-right">
                ফ্রি চক্ষু চিকিৎসা সেবা ও ছানিরোগী বাছাই ক্যাম্প
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
              ডাক্তারের প্রেসক্রিপশন অনুযায়ী চশমা ও ঔষধ
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
