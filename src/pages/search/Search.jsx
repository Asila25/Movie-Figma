import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";
import Skeleton from "../../components/skeletion/Skeleton";

const Search = () => {
  const [searchFilm, setSearchFilm] = useState("");
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const { data, error, loading } = useFetch("/discover/movie");

  const handleSearch = (e) => {
    setSearchFilm(e.target.value);
  };

  useEffect(() => {
    if (data && data.results) {
      setFilms(data.results);
    }
  }, [data]);

  useEffect(() => {
    if (searchFilm.trim() === "") {
      setFilteredFilms([]);
    } else {
      const lowercasedSearch = searchFilm.toLowerCase();
      const filtered = films.filter((film) =>
        film.title.toLowerCase().includes(lowercasedSearch)
      );
      setFilteredFilms(filtered);
    }
  }, [searchFilm, films]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white py-12">
      <div className="flex items-center bg-[#1E1E1E] rounded-full px-4 py-2 w-80 shadow-lg">
        <IoSearch className="text-[#A1A1A1] text-xl mr-2" />
        <input
          type="text"
          value={searchFilm}
          onChange={handleSearch}
          placeholder="Название фильма"
          className="bg-transparent outline-none text-sm placeholder-[#A1A1A1] text-white w-full"
        />
      </div>

      {loading && <Skeleton />}

      {(searchFilm.trim() === "" || filteredFilms.length === 0) && (
        <div className="mt-10 w-full flex justify-center">
          <div className="text-center text-[#A1A1A1] space-y-2">
            {searchFilm.trim() === "" ? (
              <>
                <p>Страница пока пуста</p>
                <p>По вашему запросу ничего не найдено</p>
              </>
            ) : (
              <p>По вашему запросу ничего не найдено</p>
            )}
          </div>
        </div>
      )}

      {filteredFilms.length > 0 && (
        <div className="mt-10 w-full flex justify-center">
          <MovieView data={filteredFilms} />
        </div>
      )}
    </div>
  );
};

export default Search;
