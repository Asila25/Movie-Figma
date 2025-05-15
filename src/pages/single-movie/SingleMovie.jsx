import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";



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
      <div className="mb-6">
        <img
          src={url + data.backdrop_path}
          alt={data.title}
          className="w-full rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-gray-700">{data.overview}</p>
        <p> {data.vote_average}</p>
        <strong className="text-lg">
          Budget: {data.budget?.toLocaleString()} USD
        </strong>
      </div>

      <div className="grid grid-cols-5">
        {images?.backdrops?.slice(7, 18)?.map((image) => (
          <img key={image.file_path} src={url + image.file_path} alt="" />
        ))}
      </div>
      <div>
        <h2>Similar</h2>
        <MovieView movies={similars?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default SingleMovie;
