import CommonSection from "@/components/shared/CommonSection";
import Image from "next/image";
import React from "react";
import avatar from '@/assets/avatar.png'

const Service = () => {
  return (
    <main className="min-h-screen bg-white">
       <CommonSection title="যোগাযোগ"/>
      {/* Header */}
      <div className="">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-12 text-center">
          <h1 className=" text-xl md:text-4xl font-bold font-bangla text-gray-900 tracking-tight">
            বরিশাল আধুনিক ছুটি হাসপাতাল
          </h1>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="border  border-gray-200 p-6 rounded-md shadow-md hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-light text-gray-900 mb-2 font-bangla">
              চলো কথা বলি
            </h3>
            <hr className="text-gray-50 " />
            <div className="flex justify-between items-center h-full">
              <div className="space-y-2 ">
                <p className="text-sm text-gray-600 font-bangla font-semibold">
                  ফোন : (+88) 1708-445363
                </p>
                <p className="text-sm text-gray-600 font-bangla font-semibold">
                  ফোন : (+88) 1718-175609
                </p>
              </div>
              <button className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.298 3.89 1.083 1.083 2.625 1.88 3.89 2.298l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="border  border-gray-200 p-6 rounded-md shadow-md hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-light text-gray-900 mb-2 font-bangla">
              ইমেল সমাধা
            </h3>
            <hr className="text-gray-50 " />
            <div className="flex justify-between items-center h-full">
              <div className="space-y-2 ">
                <p className="text-sm text-gray-600 font-bangla font-semibold">
                  ইমেল : info.bosh@gmail.com
                </p>
              </div>
              <button className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </button>
            </div>
          </div>
          {/* Address Card */}
          
          <div className="border  border-gray-200 p-6 rounded-md shadow-md hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-light text-gray-900 mb-2 font-bangla">
              ঠিকানা
            </h3>
            <hr className="text-gray-50 " />
            <div className="flex justify-between items-center h-full">
              <div className="space-y-2 ">
                <p className="text-sm text-gray-600 font-bangla font-semibold">
                  1 No. C & B Pool, C & B Road, Barishal, Barishal, Bangladesh
                </p>
              </div>
              <button className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.8794995144654!2d90.35161347349488!3d22.693445228533815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755350916f5e8a5%3A0x2767b42ed3d1a7ff!2z4Kas4Kaw4Ka_4Ka24Ka-4KayIOCmhuCmp-CngeCmqOCmv-CmlSDgpprgppXgp43gprfgp4Eg4Ka54Ka-4Ka44Kaq4Ka-4Kak4Ka-4Kay!5e1!3m2!1sen!2sbd!4v1761029836221!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Info Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Info */}
          <div className="border border-gray-200 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-light text-gray-700 mb-3 font-bangla">
              বরিশাল আধুনিক চক্ষু হাসপাতাল 
            </h3>
            <h4 className="text-base font-light text-brand mb-4 font-bangla">
              ভিশন সেন্টার (বৈঠাকাটা শাখা)
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-bangla font-semibold">
              <span className="text-brand">অবস্থান:</span> ঠেটাকাঠি ডাকার, কুলেবা দোকান বাজা লাইনারিয়ার, লোলা
              সিকন্দারপুর
            </p>
          </div>

          {/* Right Info */}
          <div className="border border-gray-200 p-6 rounded-md shadow-md">
            <h3 className="text-lg font-light text-grey-700 mb-3 font-bangla">
              বরিশাল আধুনিক ছুটি হাসপাতাল
            </h3>
            <h4 className="text-base font-light text-brand mb-4 font-bangla">
              ভিজন সেক্টর (মেহেরাজিয়া শাখা)
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-bangla font-semibold">
              <span className="text-brand">অবস্থান:</span> তুষখালী রোড,মঠবাড়িয়া পৌরসভা ৫ নং ওয়ার্ড  পিরোজপুর বাস স্ট্যান্ড               
                 সংলগ্ন, ওয়ালটন প্লাজার পাশে। 
                 থানা: মঠবাড়িয়া, জেলা পিরোজপুর
            </p>
          </div>
        </div>
        <Image src={avatar} alt="" width={1000} height={100} className="w-[70%]"/>
      </div>

    </main>
  );
};

export default Service;
