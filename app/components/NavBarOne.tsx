"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBarOne() {
  return (
    <nav className="bg-slate-200 shadow-lg fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Brand/Logo</Link>
          </div>
          <div className="hidden md:flex space-x-6">
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
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent className={""}>
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
      </div>
    </nav>
  );
}
