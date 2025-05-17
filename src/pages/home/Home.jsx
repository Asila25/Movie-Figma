import React from "react";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie");
console.log(data);

  return (
    <div>
      <MovieView data={data?.results} />
      {loading && <Skeleton count={20} />}
    </div>
  );
};

export default React.memo(Home);
