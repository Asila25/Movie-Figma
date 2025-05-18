import React, { useState } from "react";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";
import { useFetch } from "../../hooks/useFetch";
import { GoDotFill } from "react-icons/go";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import Card from "../../components/movie-view/Card";
import { FaPlay } from "react-icons/fa";

const url = import.meta.env.VITE_IMAGE_URL;

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, error, loading } = useFetch("/discover/movie");
  const navigate = useNavigate();


  
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full max-w-[1224px] h-auto  rounded-lg"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="relative flex items-center justify-center w-full h-full rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={`${url}${movie.backdrop_path}`}
              alt={movie.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent flex flex-col justify-end items-center p-6 text-white">
              <h2 className="lg:text-7xl md:text-5xl sm:text-2xl font-bold text-center mb-2">
                {movie.original_title}
              </h2>
              <div className="flex items-center gap-2 lg:text-3xl md:text-2xl sm:text-xl mb-4">
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <GoDotFill className="text-[#C61F1F]" />
                <span>{movie.original_language?.toUpperCase()}</span>
                <GoDotFill className="text-[#C61F1F]" />
                <span className="text-gray-400">
                  {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
                </span>
              </div>
              <button
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="flex items-center gap-2 bg-white text-[#C61F1F] font-medium  lg:py-3.5 md:py-3 sm:py-2.5 py-1.5 lg:px-[137px] md:px-[100px] sm:px-[75px]  px-[50px] rounded-full shadow-md hover:bg-gray-200 transition"
              >
                <FaPlay className="text-[#C61F1F]" />
                Смотреть
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="container  mb-[60px]  lg:tw-[700px] md:w-[550px] sm:w-[350px] my-1.5"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={`thumb-${movie.id}`}>
            <img
              className="rounded-2xl  "
              src={`${url}${movie.poster_path}`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-white flex justify-between items-center px-4 max-w-screen-xl mx-auto py-2.5">
        <h3>На неделе</h3>
        <Link
          to={"/movies"}
          className="flex items-center text-[#C61F1F] font-medium text-[16px] leading-[20px] tracking-[0.01em] text-right"
        >
          Показать все <MdChevronRight />
        </Link>
      </div>

      <div className="px-4 max-w-screen-xl mx-auto overflow-hidden py-4 my-5 container">
        {loading && <Skeleton count={20} />}

        {!loading && data?.results && (
          <Swiper
            className="w-full"
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1224: { slidesPerView: 4 },
            }}
          >
            {data.results.map((movie) => (
              <SwiperSlide key={movie.id} className="!w-auto">
                <div>
                  <Card item={movie} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default React.memo(Home);
