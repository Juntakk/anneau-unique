"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAvatar = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div
          className={cn(
            "text-black font-semibold mb-8 text-4xl font-[MedievalSharp] tracking-widest",
            isHovered ? "text-black" : "text-background"
          )}
        >
          {name}
        </div>
        <Avatar
          className="w-60 h-60 hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            router.push(`/${name.toLowerCase()}`);
          }}
        >
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
};

export default UserAvatar;
