import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"flex flex-col justify-center items-center mt-5   "}>
      <h1
        className={
          "font-semibold text-2xl leading-10 w-[70%] bg-blue-700/30 py-2 text-center border-2 border-blue-800/10 rounded-xl"
        }
      >
        NAVBARS AND FOOTERS
      </h1>

      <Button asChild className={"mt-5"}>
        <Link href={"/navbars"}>NavBars</Link>
      </Button>
    </div>
  );
}
