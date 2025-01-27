import React, { useState } from "react";
import { NavigationPath } from "../models/NavigationPath";
import { Link } from "react-router";
import { useSearchParam, useUpdateSearchParam } from "../models/SearchProvider";
import Search from "./Search";
import "./Styles/header-widget.css"

function HeaderWidget() {
  const searchParam = useSearchParam();
  const updateSearchParam = useUpdateSearchParam();
  return (
    <div className="header-widget">
      <h1 className="header-title">Movie-Hub</h1>
      <Search />
      <div className="nav-container">
      <Link to={NavigationPath.Home}>Home</Link>
      <Link to={NavigationPath.WishList}>WishList</Link>
      <Link to={NavigationPath.Movies}>Movies</Link>
      <Link to={NavigationPath.Series}>Series</Link>
      </div>
    </div>
  );
}

export default HeaderWidget;
