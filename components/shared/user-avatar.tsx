"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAvatar = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2 transition-all duration-300",
        isHovered ? "z-50" : "z-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar
        className={cn(
          "relative rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110",
          "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        )}
        onClick={() => router.push(`/${name.toLowerCase()}`)}
      >
        <AvatarImage
          src={image || "/placeholder.svg"}
          alt={name}
          className='w-full h-full object-cover transition-opacity duration-300 opacity-100'
        />
      </Avatar>

      <div
        className={cn(
          "text-3xl font-semibold text-amber-950 transition-opacity duration-300 mt-6",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        {name}
      </div>
    </div>
  );
};

export default UserAvatar;
