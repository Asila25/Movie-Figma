import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import afisha from "../../assets/icons/afisha.svg";
import seans from "../../assets/icons/seans.svg";

const Header = () => {
  const navItemClass = ({ isActive }) =>
    `flex flex-col items-center justify-center transition-colors duration-200 ${
      isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
    }`;

  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center py-5">
        <NavLink to="/">
          <img src="/LOGOTYPE – BILETICK.svg" alt="Main logo" />
        </NavLink>

        <ul className="flex gap-7">
          <li>
            <NavLink to="/" className={navItemClass}>
              <img src={afisha} alt="afisha icon" className="w-6 h-6 mb-1" />
              <p className="font-medium text-xs leading-[14px] tracking-tight text-center ">
                Афиша
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/seans"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
                }`
              }
            >
              <div
                className={`w-6 h-6 mb-1 flex items-center justify-center rounded ${
                  location.pathname === "/seans"
                    ? "bg-[#C61F1F]"
                    : "bg-transparent"
                }`}
              >
                <img
                  src={seans}
                  alt="seans icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <p className="font-medium text-xs leading-[14px] tracking-tight text-center">
                Сеансы
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/like" className={navItemClass}>
              <FaRegHeart className="w-6 h-6 mb-1" />
              <p className="font-medium text-xs leading-[14px] tracking-tight text-center">
                Избранное
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/search" className={navItemClass}>
              <IoSearch className="w-6 h-6 mb-1" />
              <p className="font-medium text-xs leading-[14px] tracking-tight text-center">
                Поиск
              </p>
            </NavLink>
          </li>
        </ul>

        <div>
          <button className="pt-[18px] pb-[18px] pl-[67px] pr-[67px] bg-[#C61F1F] rounded-[12px] text-white hover:bg-[#C61F1F80]">
            Войти
          </button>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
