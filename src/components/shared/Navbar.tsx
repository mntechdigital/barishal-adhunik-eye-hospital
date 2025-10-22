import React from "react";
import TopNavbar from "./TopNavbar";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <TopNavbar />
      <div className="bg-[#31363d] py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between relative">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={1000}
                height={1000}
                className="w-48"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="lg:hidden cursor-pointer p-2 text-gray-100"
          >
            <Menu className="w-6 h-6" />
          </label>

          {/* Navigation Links */}
          <div className="w-full lg:w-auto lg:flex lg:items-center lg:gap-8
                          absolute lg:static top-full left-0 bg-[#31363d] lg:bg-transparent
                          max-h-0 lg:max-h-full overflow-hidden peer-checked:max-h-96 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-gray-100 p-4 lg:p-0">
              <Link href="/" className="hover:text-brand transition duration-200 font-bangla">
                হোম
              </Link>
              <Link href="/about" className="hover:text-brand transition duration-200 font-bangla">
                আমাদের সম্পর্কে
              </Link>
              <Link href="/" className="hover:text-brand transition duration-200 font-bangla">
                আমাদের সেবা
              </Link>
              <Link href="/" className="hover:text-brand transition duration-200 font-bangla">
                সুবিধা সমূহ
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="bg-brand rounded-sm hover:bg-brand/90 transition duration-200 mt-2 lg:mt-0">
            <Link href="/contact" className="grid grid-cols-3">
              <h3 className="font-bangla text-gray-100 col-span-2 py-2 px-3">
                যোগাযোগ
              </h3>
              <span className="col-span-1 bg-white m-[2px] rounded-sm flex items-center justify-center">
                <MoveRight className="text-brand w-6 h-6 p-[2px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
