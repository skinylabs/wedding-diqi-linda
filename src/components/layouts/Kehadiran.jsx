import Image from "next/image";
import { useState } from "react";

const KehadiranPage = () => {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // State untuk menunjukkan loading

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      nama,
      jumlah,
      status,
    };

    setLoading(true); // Mengubah state loading menjadi true saat pengiriman dimulai

    try {
      const response = await fetch("/api/spreadsheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Tidak perlu mengambil response.json() karena hanya ingin menampilkan pesan berhasil
      alert("Berhasil mengirim konfirmasi kehadiran!");

      setNama("");
      setJumlah("");
      setStatus("");
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Mengubah state loading menjadi false setelah pengiriman selesai
    }
  };

  return (
    <>
      <div className="absolute z-20 w-full h-screen flex flex-col justify-center items-center px-5 ">
        <h1
          className="text-center playfair-display text-2xl divider divider-neutral"
          data-aos="fade-up"
        >
          Konfirmasi Kehadiran
        </h1>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-control w-full " htmlFor="nama">
                <div className="label" data-aos="fade-right">
                  <span className="label-text">Nama</span>
                </div>
              </label>
              <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                type="text"
                className="input input-bordered w-full "
                id="nama"
                name="nama"
                placeholder="Masukkan Nama Anda"
                data-aos="zoom-in-up"
              />
            </div>
            <div>
              <label className="form-control w-full " htmlFor="jumlah">
                <div className="label" data-aos="fade-right">
                  <span className="label-text">Jumlah</span>
                </div>
              </label>
              <input
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                type="number"
                className="input input-bordered w-full "
                id="jumlah"
                name="jumlah"
                placeholder="Masukkan Jumlah yang Hadir"
                data-aos="zoom-in-up"
              />
            </div>
            <div>
              <label className="form-control w-full " htmlFor="status">
                <div className="label" data-aos="fade-right">
                  <span className="label-text">Konfirmasi Kehadiran</span>
                </div>
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select select-bordered w-full"
                id="status"
                name="status"
                data-aos="zoom-in-up"
              >
                <option value="" disabled selected>
                  Pilih Salah Satu
                </option>
                <option value="Datang">Datang</option>
                <option value="Tidak Datang">Tidak Datang</option>
                <option value="Belum Pasti">Belum Pasti</option>
              </select>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                data-aos="flip-up"
              >
                {loading ? "Loading..." : "Kirim"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ============================================= */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}
        <Image
          src="/images/bg-4.jpg"
          alt="Home Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default KehadiranPage;
