
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoBookmarkOutline, IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineMovie } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `flex flex-col items-center justify-center transition-colors duration-200 ${
      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={navItemClass}
          onClick={() => setMenuOpen(false)}
        >
          <TbSmartHome className="w-6 h-6 mb-1" />
          <p className="text-xs text-center">Афиша</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={`w-6 h-6 mb-1 flex items-center justify-center rounded ${
              location.pathname === "/movies" ? "" : ""
            }`}
          >
            <MdOutlineMovie className="w-6 h-6 mb-1" />
          </div>
          <p className="text-xs text-center">Фильмы</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/saved"
          className={navItemClass}
          onClick={() => setMenuOpen(false)}
        >
          <IoBookmarkOutline className="w-6 h-6 mb-1" />
          <p className="text-xs text-center">Сохраненный</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          className={navItemClass}
          onClick={() => setMenuOpen(false)}
        >
          <IoSearch className="w-6 h-6 mb-1" />
          <p className="text-xs text-center">Поиск</p>
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="w-full shadow-sm  z-50 p-2.5 mb-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <NavLink to="/">
          <img
            src="/LOGOTYPE – BILETICK.svg"
            alt="Main logo"
            className="w-[150px]"
          />
        </NavLink>

        <ul className="hidden md:flex gap-7">{navLinks}</ul>

        <Link to={"/login"} className="hidden md:block">
          <button className="py-3 px-6 bg-[#C61F1F] rounded-lg text-white hover:bg-[#C61F1F80]">
            Войти
          </button>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <HiX className="w-8 h-8 text-[#C61F1F]" />
          ) : (
            <HiMenu className="w-8 h-8 text-[#C61F1F]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden absolute  left-0 w-full  bg-black shadow-md px-4 py-6 
          transition-all duration-500 ease-in-out transform 
          ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-5">{navLinks}</ul>
          <div className="mt-6 text-center">
            <button className="py-3 px-6 bg-[#C61F1F] rounded-lg text-white hover:bg-[#C61F1F80] w-full">
              Войти
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
