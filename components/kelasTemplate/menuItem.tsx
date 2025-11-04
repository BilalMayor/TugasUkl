"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const MenuItem = ({ icon, label, path }: MenuItemProps) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      href={path}
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
        active
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
