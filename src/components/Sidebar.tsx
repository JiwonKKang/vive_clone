"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { GiTechnoHeart } from "react-icons/gi";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: AiFillHome,
        label: "투데이",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: AiFillHeart,
        label: "보관함",
        active: pathname === "/library",
        href: "/library",
      },
    ],
    [pathname]
  );

  return (
    <div
      className="border-r border-border h-screen w-[230px] px-6 hidden 
    md:block"
    >
      <div className="flex gap-x-2 items-center h-[73px]">
        <div className="font-bold">NAVER</div>
        <div className="font-black text-3xl">VIBE</div>
      </div>
      <div>
        <Separator />
        <div className="py-2">TODO: 프로필</div>
        <Separator />
        <div className="py-2">
          <Button
            className="w-full flex gap-x-1 text-white bg-gradient-to-r from-red-600 
          via-pink-500
          to-purple-600"
          >
            <div>
              <GiTechnoHeart size={19} />
            </div>
            <div className="font-black ">맴버십 구독</div>
          </Button>
        </div>
        <div className="py-2">
          <Input />
        </div>
        <div>
          {routes.map((route) => {
            return (
              <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                active={route.active}
                href={route.href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;