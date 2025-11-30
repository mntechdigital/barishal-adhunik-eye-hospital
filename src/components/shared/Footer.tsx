import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-brand pt-20 pb-4 mt-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="bg-[#1F242C] rounded-2xl p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Logo & Tagline */}
            <div className="col-span-1">
              <Link href={"/"} className="flex items-center gap-3 mb-6">
                <Image src={logo} alt="logo" className="w-16" />
                <h1
                  className="font-black text-white text-shadow-lg text-3xl font-bangla
"
                >
                  বরিশাল আধুনিক চক্ষু হাসপাতাল
                </h1>
              </Link>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bangla">
                চোখ আপনার অমূল্য সম্পদ, আপনার চোখের সঠিক যত্ন নিন
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm font-bangla">
                  Follow Us :
                </span>
                <a
                  href="https://www.facebook.com/share/17akTjXWhM/"
                  className="text-white hover:text-blue-400 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Left Section */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-sm mb-1 pb-2 border-b border-brand font-bangla">
                সফট লিংক
              </h4>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 text-sm hover:text-white transition font-bangla"
                  >
                    হোম
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="text-gray-300 text-sm hover:text-white transition font-bangla"
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services"
                    className="text-gray-300 text-sm hover:text-white transition font-bangla"
                  >
                    আমাদের সেবা
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-gray-300 text-sm hover:text-white transition font-bangla"
                  >
                    যোগাযোগ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section - Contact Info */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-sm mb-1 pb-2 border-b border-brand font-bangla">
                যোগাযোগ করুন
              </h4>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm font-bangla">
                    ০১৭০৮-৪৪৫৩৬৩
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm font-bangla">
                    info.baeh@gmail.com
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm font-bangla">
                    ১ নং সি এন্ড বি পোল, সি এন্ড বি রোড, বরিশাল, বাংলাদেশ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center border-t border-brand text-white">
          <div className=" flex justify-center items-center text-xs font-bangla">
            Copyright © {year} Barishal Adhunik Eye Hospital. All Rights
            Reserved. Designed & Developed by
            <a
              href="https://mntechdigital.com/"
              className="px-1 text-red-500 font-semibold font-bangla"
            >
              <u>MNTECH DIGITAL</u>
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
