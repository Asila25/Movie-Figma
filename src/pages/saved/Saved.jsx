import React from "react";
import { useStateValue } from "../../context";
import MovieView from "../../components/movie-view/MovieView";

const Saved = () => {
  const [state] = useStateValue();
  console.log(state.saved);

  return (
    <div>
      <h2>Saved</h2>
      <MovieView data={state.saved} />
    </div>
  );
};

export default React.memo(Saved);
