"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAvatar = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative flex flex-col items-center gap-2 group'>
      <Avatar
        className={cn(
          "relative rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110",
          "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/${name.toLowerCase()}`)}
      >
        <AvatarImage
          src={image || "/placeholder.svg"}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isHovered ? "opacity-30" : "opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-black translate-y-1 font-semibold transition-opacity duration-300 pointer-events-none",
            "text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl",
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
