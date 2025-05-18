import React, { useState } from "react";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";
import { useFetch } from "../../hooks/useFetch";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import Card from "../../components/movie-view/Card";

const url = import.meta.env.VITE_IMAGE_URL;

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, error, loading } = useFetch("/discover/movie");
  console.log(data);

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
        className="mySwiper2 w-[900px] h-[600px]"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex justify-center w-full   ">
              <img
                className="w-full  h-auto max-h-[900px]   shadow-lg"
                src={`${url}${movie.poster_path}`}
                alt={movie.title}
              />
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
        className="mySwiper w-[700px] mb-[60px] mt-2"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={`thumb-${movie.id}`}>
            <img
              className="rounded-2xl"
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
