import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-auto w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <div className="w-[120px] h-[40px] flex-shrink-0">
        <Link href="/">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 md:mt-0 md:flex-1 md:mr-8 order-3 md:order-2">
        <img
          src="/search-normal.png"
          alt="Search"
          className="w-[20px] h-[20px]"
        />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2"
        />
        <img src="/filter.png" alt="Filter" className="w-[20px] h-[20px]" />
      </div>

      {/* Profile Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0 order-2 md:order-3">
        <a href="#">
          <img
            src="/Like.png"
            alt="Like"
            className="w-[36px] h-[36px] md:block"
          />
        </a>
        <a href="#">
          <img
            src="/Notification.png"
            alt="Notification"
            className="w-[36px] h-[36px] md:block"
          />
        </a>
        <a href="#">
          <img
            src="/Settings.png"
            alt="Settings"
            className="w-[36px] h-[36px] md:block"
          />
        </a>
        <a href="#">
          <img
            src="/profile.png"
            alt="profile"
            className="w-[44px] h-[44px] rounded-full self-end"
          />
        </a>
      </div>
    </div>
  );
}
