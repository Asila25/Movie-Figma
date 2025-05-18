import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";
import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Loading } from "../../utils";

const url = import.meta.env.VITE_IMAGE_URL;

const SingleMovie = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`);
  console.log(data,"single page");
  

  if (!data)
    return <div className="text-center py-10"><Loading/></div>;

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-center mb-8">
        <img
          src={url + data.backdrop_path}
          alt={data.title}
          className="w-full max-w-5xl h-auto rounded-xl shadow-2xl object-cover"
        />
      </div>

      {/* Movie Info */}
      <div className="space-y-6 bg-[#1D1D1D] p-6 rounded-xl shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-red-500">
          {data.title}
        </h2>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          {data.overview}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-400">
          <span className="flex items-center justify-center align-middle gap-1 bg-[#1D1D1D] px-4 py-1 rounded-full">
            <IoMdTime />
            {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
          </span>
          <span className="flex items-center justify-center align-middle gap-1 bg-[#1D1D1D] px-4 py-1 rounded-full">
            <CiStar /> {data.vote_average} / 10
          </span>
          <span className="flex items-center justify-center align-middle gap-1 bg-[#1D1D1D] px-4 py-1 rounded-full">
            {data.budget?.toLocaleString()}
            <MdAttachMoney />
          </span>
        </div>

        {data.genres?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="text-sm bg-[#1D1D1D] text-gray-400  px-3 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="my-6"
      >
        {images?.backdrops?.slice(0, 18)?.map((image) => (
          <SwiperSlide key={image.file_path}>
            <img
              src={url + image.file_path}
              alt=""
              className="w-full h-auto rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-6">
        <h2 className="text-white font-bold text-3xl py-3.5 ">
          Similar Movies
        </h2>
        <MovieView data={similars?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default React.memo(SingleMovie);
