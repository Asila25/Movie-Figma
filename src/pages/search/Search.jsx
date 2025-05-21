import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/movie-view/Card";

const Search = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");

  const endpoint = query
    ? `/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    : null;

  const { data, loading } = useFetch(endpoint);

  return (
    <div className="container mx-auto flex flex-col items-center mt-[50px] justify-center px-4">
      <div className="flex py-5 px-5 gap-3 border border-[#4D4D4D] w-full max-w-xl rounded-[12px]">
        <FaSearch className="text-[25px] text-red-700" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none w-full bg-transparent text-white placeholder:text-[#999]"
          type="text"
          placeholder="Search movies"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
        {loading && (
          <p className="text-center text-gray-400 col-span-full mt-10">
            Loading...
          </p>
        )}

        {!loading && data?.results?.length > 0
          ? data.results.map((item) => <Card key={item.id} item={item} />)
          : query &&
            !loading && (
              <div className="flex flex-col items-center col-span-full">
                <p className="mt-[120px] mb-[80px] text-[20px]">
                  The page is still empty
                </p>
                <p className="text-[20px]">No results found for your query.</p>
              </div>
            )}
      </div>
    </div>
  );
};

export default Search;
