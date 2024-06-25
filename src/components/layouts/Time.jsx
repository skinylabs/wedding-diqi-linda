import Countdown from "../Countdown";

const TimePage = () => {
  return (
    <>
      <div
        className="w-full h-full py-10 bg-cover bg-center "
        style={{ backgroundImage: "url('images/bg-8.jpg')" }}
      >
        <div className="w-full flex flex-col gap-2 items-center">
          <h1
            className="text-white playfair-display text-4xl "
            data-aos="fade-down"
          >
            Save The Date
          </h1>
          <div data-aos="zoom-in">
            <Countdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimePage;
