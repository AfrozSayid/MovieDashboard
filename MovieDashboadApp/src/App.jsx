import "./App.css";
import { Route, Routes } from "react-router";
import MainLayout from "./Components/MainLayout";
import { NavigationPath } from "./models/NavigationPath";
import SearchProvider from "./models/SearchProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import WishList from "./Page/WishList/WishList";
import Movies from "./Page/Movies/Movies";
import Series from "./Page/Series/Series";
import React from "react";
const HomeLazyComponent = React.lazy(() => import("./Page/Home/Home"));

function App() {
  return (
    <>
      <Provider store={store}>
        <SearchProvider>
          <Routes>
            <Route path={NavigationPath.Home} element={<MainLayout />}>
              <Route
                index
                element={
                  <React.Suspense fallback={<h1>Loading</h1>}>
                    <HomeLazyComponent />
                  </React.Suspense>
                }
              />
              <Route path={NavigationPath.Movies} element={<Movies />} />
              <Route path={NavigationPath.Series} element={<Series />} />
              <Route path={NavigationPath.WishList} element={<WishList />} />
              <Route
                path={NavigationPath.NotFound}
                element={<h1>Not Found</h1>}
              />
            </Route>
          </Routes>
        </SearchProvider>
      </Provider>
    </>
  );
}

export default App;
