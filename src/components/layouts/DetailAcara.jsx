import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

// Reusable component for Event Details
const EventDetails = ({
  title,
  dateInfo,
  time,
  location,
  address,
  mapLink,
}) => {
  return (
    <section className="w-full h-screen text-white flex flex-col items-center  justify-center px-5 md:px-10 lg:px-16 ">
      <h1
        className="text-center playfair-display text-3xl divider before:bg-white after:bg-white mb-5"
        data-aos="zoom-in-down"
      >
        {title}
      </h1>
      <p className="poppins-300 text-center" data-aos="fade-up">
        {dateInfo} | Pukul {time}
      </p>
      <div className="flex items-center playfair-display justify-center gap-4 my-4">
        <p className="text-2xl" data-aos="fade-right">
          {location.month}
        </p>
        <div className="border-l-2 border-gray-300 h-10"></div>
        <h1 className="text-5xl" data-aos="flip-left">
          {location.day}
        </h1>
        <div className="border-l-2 border-gray-300 h-10"></div>
        <p className="text-2xl" data-aos="fade-left">
          {location.year}
        </p>
      </div>
      <div
        className="bg-white w-full  p-2 text-sm rounded-lg text-center poppins-500 text-slate-900 md:h-32 md:flex md:flex-col md:justify-between "
        data-aos="zoom-out-up"
      >
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: address }}></p>
        {mapLink && (
          <Link href={mapLink} target="_blank">
            <div className="flex justify-center items-center text-slate-900 bg-yellow-500 rounded-lg p-2 cursor-pointer hover:bg-yellow-300  transition duration-300 ease-in-out ">
              <FaLocationDot className="text-slate-900 mr-2" />
              <p>Lihat di maps</p>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

const DetailAcaraPage = () => {
  return (
    <>
      <div className="absolute z-20 w-full h-full md:flex ">
        <EventDetails
          title="Akad Nikah"
          dateInfo="Kamis Pahing"
          time="07.00 WIB"
          location={{ month: "Juli", day: "04", year: "2024" }}
          address="Bertempat di Kediaman Mempelai Wanita <br/>
                   Dk. Ngawen, RT 018, Ds. Majenang, Kec. Sukodono, Kab. Sragen"
          mapLink=""
        />
        <EventDetails
          title="Resepsi"
          dateInfo="Sabtu Wage"
          time="09.00 WIB"
          location={{ month: "Juli", day: "06", year: "2024" }}
          address="Bertempat di Kediaman Mempelai Pria <br/> Dk. Tulas, RT 007/RW 003, Ds. Tulas,
                   Kec. Karangdowo, Kab. Klaten"
          mapLink="https://maps.app.goo.gl/kmEnDt1sq6RK3upGA"
        />
      </div>
      <div className="block md:hidden">
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-85 z-10"></div>
          <Image
            src="/images/6.jpg"
            alt="Home Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-85 z-10"></div>
          <Image
            src="/images/1.jpg"
            alt="Home Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-85 z-10"></div>
          <Image
            src="/images/1.jpg"
            alt="Home Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
};

export default DetailAcaraPage;
