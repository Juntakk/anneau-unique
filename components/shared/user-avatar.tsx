"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAvatar = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center gap-2 group">
      <Avatar
        className="relative w-56 h-56 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/${name.toLowerCase()}`)}
      >
        <AvatarImage
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isHovered ? "opacity-70" : "opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-black translate-y-1 font-semibold text-5xl transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {name}
        </div>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
