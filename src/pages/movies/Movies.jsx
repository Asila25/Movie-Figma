import React, { useCallback, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Genres from "../../components/genres/Genres";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  let genres = params.get("genres") || "";
  let with_genres = genres.split("-").join(",").slice(1);

  const { data, error, loading } = useFetch("/discover/movie", {
    page,
    with_genres,
    without_genres: "18,10749,36",
  });

  const handleChangeGenre = useCallback((id) => {
    let array = genres.split("-");
    if (array.includes(id)) {
      genres = array.filter((i) => i !== id).join("-");
    } else {
      genres += `-${id}`;
    }

    if (!genres) {
      params.delete("genres");
    } else {
      params.set("genres", genres);
    }
    params.set("page", "1");
    setParams(params);
  }, []);

  const handleChange = (event, value) => {
    params.set("page", value.toString());
    setParams(params);
  }; //uyga borib qilasan

  //katta son kiritilsa ham oxirgisini qoldirish kerak

  return (
    <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
      {loading ? <Skeleton count={20} /> : <MovieView data={data?.results} />}

      <div className="container mx-auto flex justify-center my-10">
        <Pagination
          count={data?.total_pages > 500 ? 500 : data?.total_pages}
          page={Number(page)}
          onChange={handleChange}
          sx={{
            button: { color: "white" },
            "& .MuiPaginationItem-root": {
              color: "white",
              borderColor: "white",
            },
            "& .Mui-selected": {
              backgroundColor: "white",
              color: "grey",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Movies;
