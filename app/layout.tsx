import { Toaster } from "sonner";
import "./globals.css";
import { MedievalSharp } from "next/font/google";

const medievalSharp = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={medievalSharp.className}>
      <head>
        <title>Les Sentinelles de l&apos;Est</title>
      </head>
      <body>
        {children}
        <Toaster
          toastOptions={{
            classNames: {
              default: "!bg-amber-900 !text-white !border-none",
            },
          }}
        />
      </body>
    </html>
  );
}
