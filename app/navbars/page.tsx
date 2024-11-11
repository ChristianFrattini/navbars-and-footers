import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NavBarPage() {
  return (
    <div className={"mt-5 flex flex-col items-center justify-center space-y-5"}>
      <h1
        className={
          "font-semibold text-2xl leading-10 w-[70%] bg-blue-700/30 py-2 text-center border-2 border-blue-800/10 rounded-xl"
        }
      >
        NAVBARS
      </h1>

      <div className={"flex  space-x-4"}>
        <Button asChild variant={"default"}>
          <Link href={"/navbars/NavBarOne"}>NavBarOne</Link>
        </Button>
        <Button asChild variant={"default"}>
          <Link href={"/navbars/NavBarTwo"}>NavBarTwo</Link>
        </Button>
      </div>
    </div>
  );
}
