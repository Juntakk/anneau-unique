import Image from "next/image";
import UserAvatar from "../components/shared/user-avatar";

export default async function Home() {
  return (
    <div className='min-h-screen text-foreground flex flex-col items-center justify-center relative overflow-hidden px-4 py-8'>
      <Image
        src='/images/parchment_bg_1.jpg'
        alt='background parchment'
        width={1920}
        height={1080}
        className='object-cover z-0 absolute inset-0 w-full h-full'
      />

      <div className='z-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
        <UserAvatar name='Raenvild' image='/images/raenvild_1.png' />
        <UserAvatar name='Varr' image='/images/varr_1.png' />
        <UserAvatar name='Firiel' image='/images/firiel_1.png' />
        <UserAvatar name='Yorick' image='/images/yorick_1.png' />
        <UserAvatar name='Nori' image='/images/nori_1.png' />
      </div>
    </div>
  );
}
