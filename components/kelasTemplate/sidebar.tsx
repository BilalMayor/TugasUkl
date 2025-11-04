    "use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import MenuItem from "./menuItem";
import { Menu, X } from "lucide-react";
import Profile from "@/public/profile.png";

type MenuType = {
  icon: ReactNode;
  path: string;
  label: string;
};

type SidebarProps = {
  title: string;
  menuList: MenuType[];
  children: ReactNode;
};

const Sidebar = ({ title, menuList, children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 w-64 h-full bg-white shadow-md z-50 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">{title}</h1>
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="mt-4 space-y-1 px-2">
          {menuList.map((menu, i) => (
            <MenuItem key={i} {...menu} />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
          <h2 className="font-semibold text-lg">Dashboard Kelas</h2>
          <div className="flex items-center gap-3">
            <Image
              src={Profile}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full border border-white"
            />
            <span className="text-sm font-medium">Siswa</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
