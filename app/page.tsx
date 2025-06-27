import Image from "next/image";
import UserAvatar from "../components/shared/user-avatar";

export default async function Home() {
  return (
    <div className="min-h-screen text-foreground flex items-start justify-center relative overflow-hidden">
      {/* Background */}
      <Image
        src="/images/parchment_bg_1.jpg"
        alt="background parchment"
        width={1920}
        height={1080}
        className="object-cover z-0 absolute inset-0 w-full h-full"
      />

      {/* Logo */}
      <Image
        src="/images/logo_sentinelles_est.png"
        width={600}
        height={300}
        alt="Sentinelles Est Logo"
        className="z-10 w-2/3 sm:w-1/2 md:w-[400px] lg:w-[600px] mt-8"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:bottom-6 lg:bottom-10">
        <UserAvatar name="Fíriel" image="/images/firiel_1.png" />
      </div>

      <div className="hidden md:block absolute top-28 right-24 z-20 lg:top-32 lg:right-100">
        <UserAvatar name="Nori" image="/images/nori_1.png" />
      </div>

      <div className="hidden md:block absolute top-28 left-24 z-20 lg:top-32 lg:left-100">
        <UserAvatar name="Raenvild" image="/images/raenvild_1.png" />
      </div>

      <div className="hidden md:block absolute bottom-28 right-24 z-20 lg:bottom-64 lg:right-120">
        <UserAvatar name="Yorick" image="/images/yorick_1.png" />
      </div>

      <div className="hidden md:block absolute bottom-28 left-24 z-20 lg:bottom-64 lg:left-120">
        <UserAvatar name="Varr" image="/images/varr_1.png" />
      </div>
    </div>
  );
}
