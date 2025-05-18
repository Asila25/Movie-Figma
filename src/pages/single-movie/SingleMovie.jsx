import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const url = import.meta.env.VITE_IMAGE_URL;

const SingleMovie = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similars } = useFetch(`/movie/${id}/similar`);

  if (!data)
    return <div className="text-center py-10">Loading movie details...</div>;

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex justify-center">
        <img
          src={url + data.backdrop_path}
          alt={data.title}
          className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700">{data.overview}</p>

        <p> {data.vote_average}</p>
        <strong className="text-lg">
          Budget: {data.budget?.toLocaleString()} USD
        </strong>
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
