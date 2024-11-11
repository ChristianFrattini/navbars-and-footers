"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, MapPin, MenuIcon, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBarTwo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled down
      setIsScrolled(window.scrollY > 20); // Adjust the scroll position threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={"fixed top-0 w-full"}>
      {/*TO ADD CLASSNAME   className={"fixed top-0 w-full"} */}
      <div
        className={`flex md:justify-between items-center justify-center bg-emerald-50 ${
          isScrolled ? " h-[4rem]" : " h-[8rem]"
        }  border border-red-400 px-7 transition-all ease-in-out duration-500 `}
      >
        <div>
          <h1 className={"text-2xl font-semibold "}>Logo/Brand</h1>
        </div>
        <div className={"md:flex hidden"}>
          <h3 className={"text-sm font-semibold flex"}>
            <MapPin className={"mr-1"} /> address
          </h3>
        </div>
        <div className={" md:justify-between space-x-4 md:flex hidden"}>
          <p className={"text-sm font-light flex"}>
            <Mail className={"mr-1"} />
            email@email.com
          </p>
          <p className={"text-sm font-light flex"}>
            <Phone className={"mr-1"} />
            0123321456987
          </p>
        </div>
        <div className="md:hidden absolute right-[90%]">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className={""} side={"left"}>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Sheet description</SheetDescription>
              <SheetClose className={"mt-5 w-full flex flex-col  space-y-2 "}>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full rounded-lg bg-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full rounded-lg bg-gray-100"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full rounded-lg bg-gray-100"
                >
                  Contact
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <nav className="bg-slate-200 shadow-lg">
        <div className="hidden md:flex space-x-6 md:justify-between mx-10 p-1">
          <Link
            href="/"
            className="text-gray-800 font-semibold p-2 hover:bg-slate-400/70 rounded-xl transition-all"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-semibold p-2 hover:bg-slate-400/70 rounded-xl transition-all"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-semibold p-2 hover:bg-slate-400/70 rounded-xl transition-all"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-semibold p-2 hover:bg-slate-400/70 rounded-xl transition-all"
          >
            Learn More
          </Link>
        </div>
        <div
          className={"md:hidden flex justify-between items-center px-7 py-2"}
        >
          <p className={"text-sm font-light flex"}>
            <Mail className={"mr-1"} />
            email@email.com
          </p>
          <p className={"text-sm font-light flex"}>
            <Phone className={"mr-1"} />
            0123321456987
          </p>
        </div>
      </nav>
    </div>
  );
}
