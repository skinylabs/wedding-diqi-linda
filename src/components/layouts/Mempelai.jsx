"use client";

import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MempelaiPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="absolute w-full h-screen text-slate-900 flex flex-col  items-center z-20 px-5 ">
        <div className="w-full text-center mt-10">
          <h1
            className="playfair-display text-yellow-600 text-xl"
            data-aos="zoom-in"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>
          <p className="poppins-500 text-xs" data-aos="zoom-out">
            dengan segala hormat, kami mengundang Bapak/Ibu, Saudara/i, untuk
            hadir pada acara pernikahan kami.
          </p>
        </div>

        <div className="w-full mt-4 justify-center items-center ">
          <div className="w-full flex flex-col gap-2 items-center">
            <Image
              src="/images/pria.webp"
              className="rounded-full"
              alt="qrcode"
              width={80}
              height={80}
              data-aos="flip-right"
            ></Image>{" "}
            <h1
              className="playfair-display text-center font-semibold text-2xl text-yellow-600"
              data-aos="fade-right"
            >
              Syahrul Diqi Arfiansyah,S.Geo
            </h1>
            <div className="poppins-500 text-xs text-center" data-aos="fade-up">
              <p>Putra Bp. Sri Waluyo & ibu Tentrem Rahayu</p>
              <p>
                Dk. Tulas, RT 007/RW 003, Ds.Tulas, Kec.Karangdowo,Kab.Klaten
              </p>
            </div>
          </div>

          {/* ============================================= */}
          <div className="w-full right-0">
            <div className="playfair-display text-5xl text-center divider divider-neutral md:px-32 lg:px-48">
              &
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 items-center">
            <Image
              src="/images/wanita.webp"
              className="rounded-full"
              alt="qrcode"
              width={80}
              height={80}
              data-aos="flip-left"
            ></Image>{" "}
            <h1
              className="playfair-display font-semibold text-center text-2xl text-yellow-600"
              data-aos="fade-left"
            >
              Linda Sintawati,S.Geo
            </h1>
            <div className="poppins-500 text-xs text-center" data-aos="fade-up">
              <p>Putri Bp.Sugiyo & Ibu Marsini</p>
              <p>Dk. Ngawen,RT 018, Ds. Majenang, Kec.Sukodono, Kab.Sragen</p>
            </div>
          </div>

          {/* ============================================= */}
        </div>
      </div>

      {/* ============================================= */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}
        <Image
          src="/images/bg-3.jpg"
          alt="Home Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default MempelaiPage;
