"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MoveRight } from "lucide-react";

const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden cursor-pointer p-2 text-gray-100"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Links */}
      <div
        className={`w-full lg:hidden absolute top-full left-0 bg-[#31363d] z-50 shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-96 border-t border-gray-700" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-100 p-4">
          <Link
            href="/"
            className="hover:text-brand transition duration-200 font-bangla py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            হোম
          </Link>
          <Link
            href="/about"
            className="hover:text-brand transition duration-200 font-bangla py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            href="/"
            className="hover:text-brand transition duration-200 font-bangla py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            আমাদের সেবা
          </Link>
          <Link
            href="/"
            className="hover:text-brand transition duration-200 font-bangla py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            সুবিধা সমূহ
          </Link>
          
          {/* Mobile Contact Button */}
          <div className="bg-brand rounded-sm hover:bg-brand/90 transition duration-200 mt-2">
            <Link href="/contact" className="grid grid-cols-3" onClick={closeMenu}>
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
    </>
  );
};

export default NavbarClient;