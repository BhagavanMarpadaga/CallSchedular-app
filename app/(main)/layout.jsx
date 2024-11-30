"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];

const AppLayout = ({ children }) => {
  const { isLoaded } = useUser();
  const pathName   = usePathname()
  return (
    <div>
      {isLoaded ? "" : <Skeleton className="h-1 w-100 bg-blue-300" />}
      <div className="flex flex-col h-screen bg-blue-50 md:flex-row">
        <aside className="hidden md:block w-64 bg-white">
          <nav className="mt-4">
            <ul className="h-screen ">
              {navItems.map((item) => {
                return (
                  <li key={item.label} >
                    <Link href={item.href} className={`flex items-center p-2 ${item.href===pathName ? `bg-blue-100`:""} hover:bg-gray-100`}>
                    <item.icon h='5' w='5' className="mr-5"/>
                    {item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>

      {/* {children} */}
    </div>
  );
};

export default AppLayout;
