import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import breath from "@/assets/breathW.png";
import slidOne from "@/assets/slidImage/slidOne.png";
import slidTwo from "@/assets/slidImage/slidTwo.png";
import slidThree from "@/assets/slidImage/slidThree.png";
import slidFour from "@/assets/slidImage/slidFour.png";
import slidFive from "@/assets/slidImage/slidFive.png";
import slidSix from "@/assets/slidImage/slidSix.png";
const HomeService = () => {
  const slides = [
    {
      id: 1,
      image:slidOne,
        
        description:"ডিজিটাল কম্পিউটার ও স্লীট ল্যাম্পের মাধ্যমে চক্ষু ও মাথা ব্যাথা পরীক্ষা করা হয়."
    },
    {
      id: 2,
      image: slidTwo,
      description:"অত্যাধুনিক ডিজিটাল মাইক্রোস্কোপর মাধ্যমে,  ছানি ও ফ্যাকো অপারেশন করা হয়.।"
    },
    {
      id: 3,
      image: slidThree,
       description:"চোখ থেকে পানি পড়া ও নেত্রনালী DCR & DCT টিউব এর মাধ্যমে অপারেশন করা হয়. "
    },
    {
      id: 4,
      image: slidFour,
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
    {
      id: 5,
      image: slidFive,
       description:"এছাড়াও চোখের যাবতীয় অপারেশন করা হয়।"
    }
  ];

  return (
    <main className=" w-full bg-brand mt-20 py-14">
     <div className="flex justify-center items-center gap-2 ">
        <Image src={breath} alt="breath" width={20} height={50} />
        <h1 className="font-bangla text-lg text-white">আমাদের সেবা সমূহ</h1>
        <Image src={breath} alt="breath" width={20} height={50} />
      </div>
      <h1 className="font-bangla font-bold text-xl md:text-3xl text-center pt-2 pb-8 text-white">আমাদের বরিশাল আধুনিক চক্ষু হাসপাতালের পরিষেবা</h1>
        <Slider slides={slides} autoPlay={true} autoPlayInterval={5000} visibleCount={5} />
    </main>
  );
};

export default HomeService;
