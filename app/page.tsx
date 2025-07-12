import Image from "next/image";
import UserAvatar from "../components/shared/user-avatar";

export default function Home() {
  return (
    <div className='relative w-screen h-screen overflow-hidden flex items-center justify-center'>
      <Image
        src='/images/parchment_bg_1.jpg'
        alt='background parchment'
        width={1920}
        height={1080}
        className='object-cover z-0 absolute inset-0 w-full h-full'
      />

      <h1 className='absolute top-20 w-full text-center text-6xl font-bold text-amber-950 drop-shadow-lg z-0'>
        Les Sentinelles de l&apos;Est
      </h1>

      <div className='z-10 flex justify-center items-center w-full animate-fade-in'>
        <UserAvatar name='Raenvild' image='/images/raenvild_1.png' />
        <UserAvatar name='Varr' image='/images/varr_1.png' />
        <UserAvatar name='Firiel' image='/images/firiel_1.png' />
        <UserAvatar name='Yorick' image='/images/yorick_1.png' />
        <UserAvatar name='Nori' image='/images/nori_1.png' />
      </div>
    </div>
  );
}
