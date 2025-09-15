import React from "react";
import Image from "next/image";

const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    // 1. h-[400px] dan id="service" dihapus
    <div className="w-72 bg-warna2 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl scroll-pt-32">
      <div className="w-48 aspect-square relative mb-8 rounded-lg overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-xl font-bold font-['Poppins'] text-warna3 mb-2">
        {title}
      </h3>

      {/* 2. Ditambahkan text-justify dan mb-6 untuk spacing */}
      <p className="text-black text-xs font-medium font-['Poppins'] leading-tight flex-grow text-justify mb-4">
        {description}
      </p>

      <div className="w-full flex">
        <button className="w-32 px-3 py-2.5 bg-warna3 rounded-lg flex justify-center items-center text-zinc-100 text-xs font-medium font-['Poppins'] leading-tight transition-colors hover:bg-blue-900 ml-auto">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
