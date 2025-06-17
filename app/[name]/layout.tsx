import Link from "next/link";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="bg-primary text-primary-foreground px-6 py-4 shadow-md flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
