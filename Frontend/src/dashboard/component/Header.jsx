import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center bg-blend-darken relative"
      style={{
        backgroundImage: 'url("src/img/hero2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "730px",
        paddingTop: "26px",
      }}
    >
      <Navbar />
      <div className="flex flex-col gap-5 justify-center items-center mt-[150px]">
        <h1 className="text-white text-center text-6xl font-bold max-w-5xl mx-auto mb-3">
          Temukan Kisah Menakjubkan di Koleksi Buku Cerita Terbaru Kami!
        </h1>
        <p className="leading-6 text-sm text-white text-center text-[18px] max-w-3xl mx-auto mb-4">
          Nikmati petualangan seru dan inspiratif dari koleksi buku terbaru
          kami. Temukan dunia penuh imajinasi dan keajaiban untuk semua usia.
          Mulai perjalanan membaca Anda dan temukan keajaiban di setiap cerita!
        </p>
        <button
          className="h-10 text-white bg-yellow-100 rounded-full w-36"
          style={{ backgroundColor: "#B2AFE7" }}
        >
          Baca Sekarang
        </button>
      </div>
    </div>
  );
};

export default Header;