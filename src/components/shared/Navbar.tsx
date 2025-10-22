import TopNavbar from "./TopNavbar";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, } from "lucide-react";
import NavbarClient from "./NavbarClient";

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

          {/* Mobile Menu Toggle - Client Component */}
          <NavbarClient />

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex lg:w-auto lg:items-center lg:gap-8">
            <div className="flex lg:flex-row lg:items-center gap-8 text-gray-100">
              <Link href="/" className="hover:text-brand transition duration-200 font-bangla">
                হোম
              </Link>
              <Link href="/about" className="hover:text-brand transition duration-200 font-bangla">
                আমাদের সম্পর্কে
              </Link>
              <Link href="/service" className="hover:text-brand transition duration-200 font-bangla">
                আমাদের সেবা
              </Link>
              <Link href="/facility" className="hover:text-brand transition duration-200 font-bangla">
                সুবিধা সমূহ
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block bg-brand rounded-sm hover:bg-brand/90 transition duration-200">
            <Link href="/service" className="grid grid-cols-3">
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
