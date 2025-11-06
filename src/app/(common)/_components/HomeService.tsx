"use client";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Image from "next/image";
import breath from "@/assets/breathW.png";
import slidOne from "@/assets/slidImage/slidOne.png";
import slidTwo from "@/assets/slidImage/slidTwo.png";
import slidThree from "@/assets/slidImage/slidThree.png";
import slidFour from "@/assets/slidImage/slidFour.png";
import slidFive from "@/assets/slidImage/slidFive.png";
const HomeService = () => {
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const calculateVisibleCount = (width: number) => {
    // small devices
    if (width < 640) return 2;
    // medium devices
    if (width < 1024) return 4;
    // large and up
    return 5;
  };

  useEffect(() => {
    const update = () =>
      setVisibleCount(calculateVisibleCount(window.innerWidth));

    // Initialize
    update();

    // Debounced resize handler
    let timeout: number | undefined;
    const handler = () => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(update, 150);
    };

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  const slides = [
    {
      id: 1,
      image: slidOne,

      description:
        "ডিজিটাল কম্পিউটার ও স্লীট ল্যাম্পের মাধ্যমে চক্ষু সমস্যা ও মাথা ব্যথার কারণ নির্ণয় করা হয়।",
    },
    {
      id: 2,
      image: slidTwo,
      description:
        "অত্যাধুনিক ফ্যাকো মেশিন ও মাইক্রোস্কোপ এর মাধ্যমে চোখের ছানি অপারেশন করা হয়।",
    },
    {
      id: 3,
      image: slidThree,
      description:
        "DCR & DCT টিউব এর মাধ্যমে চোখ থেকে পানি পড়া ও নেত্রনালী অপারেশন করা হয়।",
    },
    {
      id: 4,
      image: slidFour,
      description: "BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা করা হয়।",
    },
    {
      id: 5,
      image: slidFive,
      description:
        "স্বল্পমূল্যে RBS, SPT, IOP পরীক্ষা করার ব্যবস্থা রয়েছে এছাড়াও চোখের যাবতীয় চিকিৎসা সেবা প্রদান করা হয়।",
    },
  ];

  return (
    <main className=" w-full bg-brand mt-20 py-14">
      <div className="flex justify-center items-center gap-2 ">
        <Image src={breath} alt="breath" width={20} height={50} />
        <h1 className="font-bangla text-lg text-white">আমাদের সেবা সমূহ</h1>
        <Image src={breath} alt="breath" width={20} height={50} />
      </div>
      <h1 className="font-bangla font-bold text-xl md:text-3xl text-center pt-2 pb-8 text-white">
        বরিশাল আধুনিক চক্ষু হাসপাতালের পরিষেবা সমূহ
      </h1>
      <Slider
        slides={slides}
        autoPlay={true}
        autoPlayInterval={5000}
        visibleCount={visibleCount}
      />
    </main>
  );
};

export default HomeService;
