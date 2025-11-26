import React from "react";
import Image from "next/image";

const ServiceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] bg-warna2 rounded-2xl shadow-lg p-6 sm:p-7 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-h-[450px] sm:min-h-[480px] md:min-h-[500px]">
      <div className="w-44 sm:w-48 md:w-52 aspect-square relative mb-6 sm:mb-7 md:mb-8 rounded-lg overflow-hidden shadow-md flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-['Poppins'] text-warna3 mb-3 sm:mb-4">
        {title}
      </h3>

      <p className="text-black text-sm sm:text-base md:text-lg font-medium font-['Poppins'] leading-relaxed flex-grow text-justify mb-5 sm:mb-6">
        {description}
      </p>

      <div className="w-full flex mt-auto">
        <a
          className="w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-warna3 rounded-lg flex justify-center items-center text-zinc-100 text-sm sm:text-base md:text-lg font-medium font-['Poppins'] leading-tight transition-colors hover:bg-blue-900 ml-auto shadow-md hover:shadow-lg"
          href="https://wa.me/6283171772363?text=Halo%20saya%20ingin%20memesan%20jasa%20desain%20dan%20website."
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
