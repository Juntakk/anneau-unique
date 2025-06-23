import Image from "next/image";
import UserAvatar from "../components/shared/user-avatar";

export default async function Home() {
  return (
    <div className="min-h-screen text-foreground flex items-center justify-center px-4 py-10">
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
        className="mb-8 drop-shadow-lg z-1"
      />

      <div className="absolute top-5 z-3">
        <UserAvatar name="Fíriel" image="/images/firiel_1.png" />
      </div>
      <div className="absolute top-60 right-140 z-3">
        <UserAvatar name="Nori" image="/images/nori_1.png" />
      </div>
      <div className="absolute top-60 left-140 z-3">
        <UserAvatar name="Raenvild" image="/images/raenvild_1.png" />
      </div>
      <div className="absolute bottom-25 right-160 z-3">
        <UserAvatar name="Yorick" image="/images/yorick_1.png" />
      </div>
      <div className="absolute bottom-25 left-160 z-3">
        <UserAvatar name="Varr" image="/images/varr_1.png" />
      </div>
    </div>
  );
}
