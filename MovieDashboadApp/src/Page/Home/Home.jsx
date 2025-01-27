import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard";
import { useSearchParam } from "../../models/SearchProvider";
import { FilterRules } from "../../models/UtilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesAndSeries } from "../../store/moviesAndSeriesSlice";
import LeaderBoard from "../../Components/Styles/LeaderBoard";

function Home() {
  //Added redux
  // const [moviesAndSeries, setMoviesAndSeries] = useState([]);
  const searchParam = useSearchParam();

  const dispatch = useDispatch();
  const moviesandSeriesData = useSelector((state) => state.moviesAndSeries);

  useEffect(() => {
    if (moviesandSeriesData && moviesandSeriesData.length > 0) return;
    fetch("/moviesandseries.json")
      .then((response) => response.json())
      // .then((data) => setMoviesAndSeries(data.moviesandseries))
      .then((data) => dispatch(setMoviesAndSeries(data.moviesandseries)))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //can auto save as json to local storage using useEffect with dep as change in state
  //try using custom hooks for saving data to local-storage
  //On reload try to fetch from the local-storage 1st and if there is not data then try fetching using api call moviejson in assets

  const leaderBoardList = moviesandSeriesData
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <>
      <LeaderBoard leaderBoardList={leaderBoardList} />
      <div className="card-container">
        {searchParam
          ? moviesandSeriesData
              .filter((item) => FilterRules(item, searchParam))
              .map((item) => <MovieCard key={item.id} moviesAndSeries={item} />)
          : moviesandSeriesData.map((item) => (
              <MovieCard key={item.id} moviesAndSeries={item} />
            ))}
      </div>
    </>
  );
}

export default Home;
