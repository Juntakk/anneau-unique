import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <nav className="bg-transparent text-primary-foreground px-6 py-4 flex justify-between items-center relative z-10">
        <div className="space-x-8">
          <Link
            href="/"
            className="text-primary text-2xl font-bold flex hover:text-secondary"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
            Home
          </Link>
        </div>
      </nav>
      <Image
        src="/images/parchment_bg_1.jpg"
        alt="background parchment"
        width={1920}
        height={1080}
        className="object-cover absolute inset-0 w-full h-full z-0"
      />

      <div className="w-full flex justify-center py-2 relative z-10">
        <Image
          src="/images/anneau-unique-logo.png"
          alt="Anneau unique logo"
          width={400}
          height={300}
        />
      </div>

      <main className="px-0 relative z-10">{children}</main>
    </div>
  );
};

export default MainLayout;
