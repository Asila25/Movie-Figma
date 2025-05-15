
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Genres from "../../components/genres/Genres";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";

const Movies = () => {
  const [genre, setGenre] = useState("");
  const { data, error, loading } = useFetch("/discover/movie", {
    page: 1,
    with_genres: genre,
    without_genres: "18,10749,36",
  });
  return (
    <div>
      <Genres setGenre={setGenre} />
      <MovieView movies={data} />
      {loading && <Skeleton count={20} />}
    </div>
  );
};

export default Movies;
