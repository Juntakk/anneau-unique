"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAvatar = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "w-1/5 h-full transition-transform duration-700 ease-in-out",
        isHovered ? "z-30 scale-[1.3]" : "z-20 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/${name.toLowerCase()}`)}
    >
      <div
        className={cn(
          "w-full aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out mt-10",
          isHovered ? "rounded-2xl shadow-lg" : ""
        )}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes='100%'
          className='object-cover transition-all duration-700 ease-in-out hover:brightness-90'
        />
      </div>

      <div
        className={cn(
          "mt-2 text-center text-3xl font-semibold text-amber-950 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{ minHeight: "1.5rem" }}
      >
        {name}
      </div>
    </div>
  );
};

export default UserAvatar;
