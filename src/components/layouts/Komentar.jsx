"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const WeddingComments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Memuat komentar dari localStorage saat komponen dimuat
    const savedComments = localStorage.getItem("wedding_comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []); // Hanya dijalankan sekali saat komponen dimuat pertama kali

  const getMonthName = (monthIndex) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return months[monthIndex];
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = getMonthName(date.getMonth());
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${year} pukul ${hours}.${minutes} WIB`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const formattedTime = formatDate(currentTime);
    const newComment = { name, comment, time: formattedTime };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    // Simpan komentar ke localStorage
    localStorage.setItem("wedding_comments", JSON.stringify(updatedComments));
    // Reset form setelah submit
    setName("");
    setComment("");
  };

  const handleReset = () => {
    // Hapus semua komentar dari localStorage
    localStorage.removeItem("wedding_comments");
    // Reset state komentar di komponen
    setComments([]);
  };

  return (
    <>
      <div className="absolute w-full flex flex-col justify-center items-center z-20 px-5">
        <h1
          className="w-full mb-5 text-center playfair-display text-2xl divider divider-neutral"
          data-aos="fade-up"
        >
          Sampaikan Sesuatu
        </h1>
        <div className="space-y-4 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              required
              data-aos="zoom-in-up"
            />
            <textarea
              placeholder="Tulis apa yang ingin Anda sampaikan..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
              required
              data-aos="zoom-in-up"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              data-aos="flip-up"
            >
              Kirim Ucapan
            </button>
          </form>

          <div
            className="max-h-[22rem] overflow-y-auto mt-4"
            data-aos="zoom-in-down"
          >
            {comments.length === 0 && (
              <p className="text-gray-500">Belum ada komentar.</p>
            )}

            {comments.map((c, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-3 mb-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              >
                <p className="font-bold">{c.name}</p>
                <p>{c.comment}</p>
                <p className="text-xs text-slate-400">{c.time}</p>
              </div>
            ))}
          </div>

          {/* Tombol untuk mereset komentar */}
          {/* <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Reset Komentar
          </button> */}
        </div>
      </div>
      {/* ============================================= */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}
        <Image
          src="/images/bg.jpg"
          alt="Home Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default WeddingComments;
