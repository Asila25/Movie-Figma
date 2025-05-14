import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";

const Home = () => {
  const { data, loading, error } = useFetch("/discover/movie");

  console.log(data);

  return <div>
    <MovieView data={data?.results} />
  </div>;
};

export default Home;
