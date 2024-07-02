import React from "react";

const Header = () => {
  const navItems = [
    {
      name: "Beranda",
      link: "#",
    },
    {
      name: "Cerita Pilihan",
      link: "#",
    },
    {
      name: "Tentang",
      link: "#",
    },
    {
      name: "Kontak",
      link: "#",
    },
  ];
  return (
    <div
      className="bg-yellow-200 h-screen py-5"
      style={{ backgroundImage: 'url("src/img/hero.png")' }}
    >
      <nav
        className="mx-20 rounded-full h-12 flex items-center justify-between px-10"
        style={{ backgroundColor: "#8DAAE5" }}
      >
        <div className="flex">
          <p className="font-bold text-white">Dongeng Pustaka</p>
          <ul className="flex gap-5 mx-10 text-white">
            {navItems.map((nav, index) => {
              return <a href={nav.link}>{nav.name}</a>;
            })}
          </ul>
        </div>
        <div className="flex gap-2">
          <button
            className="h-8 text-white bg-yellow-100 rounded-full w-20"
            style={{ backgroundColor: "#B2AFE7" }}
          >
            Masuk
          </button>
          <button
            className="h-8 border-2 text-white bg-transparent rounded-full w-32"
            style={{ borderColor: "#B2AFE7" }}
          >
            Daftar Gratis
          </button>
        </div>
      </nav>
      <div className="flex flex-col gap-5 justify-center items-center my-32">
        <h1 className="text-white text-center w-3/5 text-4xl font-bold">
          Temukan Kisah Menakjubkan di Koleksi Buku Cerita Terbaru Kami!
        </h1>
        <p className="leading-6 text-sm text-white text-center w-2/5">
          Nikmati petualangan seru dan inspiratif dari koleksi buku terbaru
          kami. Temukan dunia penuh imajinasi dan keajaiban untuk semua usia.
          Mulai perjalanan membaca Anda dan temukan keajaiban di setiap cerita!
        </p>
        <button
          className="h-10 text-white bg-yellow-100 rounded-full w-36 my-5"
          style={{ backgroundColor: "#B2AFE7" }}
        >
          Baca Sekarang
        </button>
      </div>
    </div>
  );
};

export default Header;
