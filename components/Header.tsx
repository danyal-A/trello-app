"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/images/trello2.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row p-5 items-center bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-red-400 to-blue-600 blur-3xl filter opacity-50 -z-50" />
        <Image
          src={logo}
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex space-x-4 items-center justify-end flex-1">
          <form className="border p-3 rounded-xl flex items-center space-x-4 bg-white shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            <input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              type="text"
              placeholder="search"
              className="flex-1 outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Danyal Ahmed" round size="50" />
        </div>
      </div>
    </header>
  );
};

export default Header;
