import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard";
import { useSearchParam } from "../../models/SearchProvider";
import { FilterRules } from "../../models/UtilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesAndSeries } from "../../store/moviesAndSeriesSlice";

function Movies() {
  //TODO Add series based features from here
  const searchParam = useSearchParam();

  const moviesandSeriesData = useSelector((state) => state.moviesAndSeries);

  return (
    <div className="card-container">
      {searchParam
        ? moviesandSeriesData
            .filter((item) => FilterRules(item, searchParam))
            .filter((item) => item.type === "movie")
            .map((item) => <MovieCard key={item.id} moviesandSeries={item} />)
        : moviesandSeriesData
            .filter((item) => item.type === "movie")
            .map((item) => <MovieCard key={item.id} moviesAndSeries={item} />)}
    </div>
  );
}

export default Movies;
