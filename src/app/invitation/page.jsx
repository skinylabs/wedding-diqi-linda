import AutoPlayAudio from "../../components/AutoPlayAudio";
import Menu from "../../components/Menu";
import Time from "../../components/layouts/Time";
import Mempelai from "../../components/layouts/Mempelai";
import DetailAcara from "../../components/layouts/DetailAcara";
import Gallery from "../../components/layouts/Gallery";
import Kehadiran from "../../components/layouts/Kehadiran";
import Komentar from "../../components/layouts/Komentar";
const InvitationPage = () => (
  <>
    <div className="absolute w-full h-screen flex z-50 place-items-end justify-center bottom-6">
      {" "}
      <Menu />
    </div>
    <div className="fixed bottom-24 right-0 z-50 ">
      <div className="w-8 h-8 rounded-full  bg-yellow-500  text-white flex justify-center items-center">
        <AutoPlayAudio />
      </div>
    </div>
    <section id="home">
      <Mempelai />
    </section>

    <Time />

    <section id="DetailAcara">
      <DetailAcara />
    </section>
    <section id="gallery">
      <Gallery />
    </section>
    <section id="kehadiran">
      <Kehadiran />
    </section>
    <section id="comment">
      <Komentar />
    </section>
    <div>
      <p className="w-full text-center poppins-500 py-5 mb-20 bg-orange-100">
        Made with ❤️ by{" "}
        <a href="https://www.instagram.com/skinylabs/" target="_blank">
          Skinylabs
        </a>
      </p>
    </div>
  </>
);

export default InvitationPage;
