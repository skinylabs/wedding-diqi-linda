import Image from "next/image";
import Link from "next/link";
const MainPage = () => {
  return (
    <div>
      <div className="absolute flex flex-col z-20 w-full h-screen justify-center items-center">
        <div className=" flex flex-col items-center">
          <h1 className="text-white roboto text-xl">The Wedding of</h1>
          <h1 className="text-white playfair-display text-6xl">DIQI & LINDA</h1>
        </div>
        <Link href="/invitation">Lihat Undangan</Link>
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
};

export default MainPage;
