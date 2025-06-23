import Image from 'next/image';
import UserAvatar from '../components/shared/user-avatar';

export default async function Home() {
  return (
    <div className="min-h-screen text-foreground flex items-start justify-center px-4 py-10 relative overflow-hidden">
      <Image
        src="/images/parchment_bg_1.jpg"
        alt="background parchment"
        width={1920}
        height={1080}
        className="object-cover z-0 absolute inset-0 w-full h-full"
      />

      {/* Logo - Responsive sizing */}
      <Image
        src="/images/logo_sentinelles_est.png"
        width={600}
        height={300}
        alt="Sentinelles Est Logo"
        className="mb-8 drop-shadow-lg z-10 w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[500px] 2xl:w-[600px]"
      />

      {/* Character Avatars - Responsive positioning accounting for 224px avatar size */}
      {/* Top center - Fíriel */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 sm:bottom-4 md:bottom-6 lg:bottom-8">
        <UserAvatar name="Fíriel" image="/images/firiel_1.png" />
      </div>

      {/* Top right - Nori - Hidden on small screens to prevent overlap */}
      <div className="hidden sm:block absolute top-12 right-2 z-20 sm:top-16 sm:right-4 md:top-20 md:right-8 lg:top-24 lg:right-12 xl:top-32 xl:right-50 2xl:right-32">
        <UserAvatar name="Nori" image="/images/nori_1.png" />
      </div>

      {/* Top left - Raenvild - Hidden on small screens to prevent overlap */}
      <div className="hidden sm:block absolute top-12 left-2 z-20 sm:top-16 sm:left-4 md:top-20 md:left-8 lg:top-24 lg:left-12 xl:top-32 xl:left-50 2xl:left-32">
        <UserAvatar name="Raenvild" image="/images/raenvild_1.png" />
      </div>

      {/* Bottom right - Yorick */}
      <div className="absolute bottom-12 right-2 z-20 sm:bottom-16 sm:right-4 md:bottom-20 md:right-8 lg:bottom-24 lg:right-12 xl:bottom-42 xl:right-75 2xl:right-32">
        <UserAvatar name="Yorick" image="/images/yorick_1.png" />
      </div>

      {/* Bottom left - Varr */}
      <div className="absolute bottom-12 left-2 z-20 sm:bottom-16 sm:left-4 md:bottom-20 md:left-8 lg:bottom-24 lg:left-12 xl:bottom-42 xl:left-75 2xl:left-32">
        <UserAvatar name="Varr" image="/images/varr_1.png" />
      </div>
    </div>
  );
}
