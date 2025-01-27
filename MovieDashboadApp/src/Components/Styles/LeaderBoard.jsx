import React from "react";
import "../Styles/leaderboard.css";

function LeaderBoard({ leaderBoardList }) {
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">Top 5 Rated Movies</h2>
      <ul className="leaderboard-list">
        {leaderBoardList.map((item) => (
          <li key={item.id} className="leaderboard-item">
            <span>{item.name} </span> <span>{item.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;
