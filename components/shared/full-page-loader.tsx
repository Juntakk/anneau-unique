"use client";
import Image from "next/image";

export default function FullPageLoader() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <Image
        src='/images/parchment_bg_1.jpg'
        alt='background parchment'
        width={1920}
        height={1080}
        className='object-cover absolute inset-0 w-full h-full z-0'
      />
      <Image
        src='/images/logo_sentinelles_est.png'
        width={600}
        height={300}
        alt='Sentinelles Est Logo'
        className='z-10 w-2/3 sm:w-1/2 md:w-[400px] lg:w-[600px]'
      />
    </div>
  );
}
