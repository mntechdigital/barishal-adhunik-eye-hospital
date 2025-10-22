import Image from "next/image";
import React from "react";
import breath from "@/assets/breath.png";
import imgOne from "@/assets/about-img-one.png";
import imgTwo from "@/assets/about-img-two.png";
import Authority from "./_components/Authority";
import CommonSection from "@/components/shared/CommonSection";

const About = () => {
  return (
    <div className="">
      <CommonSection title="আমাদের সম্পর্কে" />
      <div className="flex justify-center items-center gap-2 mt-24 ">
        <Image src={breath} alt="breath" width={20} height={50} />
        <h1 className="font-bangla">আমাদের সম্পর্কে</h1>
        <Image src={breath} alt="breath" width={20} height={50} />
      </div>
      <div className="mt-5">
        <p className="w-full md:max-w-lg mx-auto text-center leading-10">
          <span className="text-xl md:text-3xl pe-2">আমরা আপনার</span>
          <span className="font-bold text-brand text-xl md:text-3xl ">
            বরিশাল আধুনিক চক্ষু হাসপাতালের যত্ন নিচ্ছি।
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 justify-between items-center mt-5">
        <Image src={imgTwo} alt="breath" className="col-span-1 w-full" />
        <p className="col-span-4 flex flex-col justify-center items-center text-center py-5 md:px-5 font-bangla">
          <span className="font-semibold pb-5 font-bangla">
            “উজ্জ্বল দৃষ্টি, সুস্থ ভবিষ্যৎ”
          </span>
          বরিশাল আধুনিক চক্ষু হাসপাতাল দক্ষিণাঞ্চলের একটি শীর্ষস্থানীয় চক্ষু
          চিকিৎসা প্রতিষ্ঠান। আমরা আধুনিক প্রযুক্তি, দক্ষ চিকিৎসক ও সেবাপ্রবণ
          টিমের মাধ্যমে প্রতিদিন হাজারো মানুষের দৃষ্টিশক্তি রক্ষা ও পুনরুদ্ধারে
          কাজ করছি। আমাদের লক্ষ্য শুধু চিকিৎসা নয়—দৃষ্টি সংরক্ষণ, সচেতনতা বৃদ্ধি
          এবং মানবিক সেবার মাধ্যমে সমাজে আলো ছড়িয়ে দেওয়া।
        </p>
        <div className="col-span-1 flex justify-end items-center w-full">
          <Image src={imgOne} alt="breath" className="w-full " />
        </div>
      </div>

      {/* Authority details and speech */}
      <Authority />
    </div>
  );
};

export default About;
