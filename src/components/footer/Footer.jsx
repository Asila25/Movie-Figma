import React from "react";
import icon from "/public/EMBLEM.svg";
import googlePlay from "../../assets/icons/googlePlay.svg";
import appStore from "../../assets/icons/appStore.svg";
import publicOfferIcon from "../../assets/icons/publicOffer.svg";
import advertIcon from "../../assets/icons/advert.svg";
import faqIcon from "../../assets/icons/faq.svg";
import contactsIcon from "../../assets/icons/contacts.svg";
import cinemaIcon from "../../assets/icons/cinema.svg";
import theaterIcon from "../../assets/icons/theater.svg";
import concertIcon from "../../assets/icons/concert.svg";
import sportIcon from "../../assets/icons/sport.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto  gap-5 bg-[#1D1D1D] text-white rounded ">
      <div className=" grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-between items-start gap-8 py-6">
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <img src={icon} alt="main icon" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2  p-2 cursor-pointer">
              <img src={googlePlay} alt="googlePlay" />
            </div>
            <div className="flex items-center gap-2  p-2 cursor-pointer">
              <img src={appStore} alt="appStore" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium mb-2">О нас</h3>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-2">
              <img src={publicOfferIcon} alt="public offer icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Публичная оферта
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={advertIcon} alt="advert icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline "
              >
                Реклама
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={faqIcon} alt="faq icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                F.A.Q
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={contactsIcon} alt="contacts icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium mb-2">Категории</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <img src={cinemaIcon} alt="cinema icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Кино
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={theaterIcon} alt="theater icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Театр
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={concertIcon} alt="concert icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Концерты
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <img src={sportIcon} alt="sport icon" />
              <Link
                to={"#"}
                className="text-base leading-5 font-medium tracking-tight hover:text-[#C61F1F] hover:underline"
              >
                Спорт
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Связаться с нами</h3>
            <a href="tel:+998957973338" className="text-red-500 font-medium">
              +998 (95) 897-33-38
            </a>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Социальные сети</h3>
            <div className="flex gap-4">
              <Link to={"#"} className="text-gray-400 hover:text-red-500">
                <img src={instagramIcon} alt="Instagram" />
              </Link>
              <Link to={"#"} className="text-gray-400 hover:text-red-500">
                <img src={facebookIcon} alt="Facebook" />
              </Link>
              <Link to={"#"} className="text-gray-400 hover:text-red-500">
                <img src={youtubeIcon} alt="Youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
