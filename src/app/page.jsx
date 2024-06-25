import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="absolute flex flex-col gap-4 z-20 w-full h-screen justify-center items-center">
        <div className=" flex flex-col items-center">
          <h1 className="text-white roboto text-xl">The Wedding of</h1>
          <h1 className="text-white playfair-display text-5xl lg:text-6xl">
            DIQI & LINDA
          </h1>
        </div>
        <Link
          href="/invitation"
          className="flex justify-center items-center w-64 h-10 rounded-lg bg-yellow-300 border-0 font-semibold text-slate-900"
        >
          Lihat Undangan
        </Link>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <Image
          src="/images/home.jpg"
          alt="Home Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
