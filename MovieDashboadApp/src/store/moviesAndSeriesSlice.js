import { createSlice } from "@reduxjs/toolkit";

const moviesAndSeriesSlice = createSlice({
  name: "moviesAndSeries",
  initialState: [],
  reducers: {
    setMoviesAndSeries: (state, action) => {
      state = action.payload;
      return action.payload;
    },
    addUserReview: (state, action) => {
      const { id, userRating } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, userRating: userRating } : item
      );
    },
    addToWishlist: (state, action) => {
      const id = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, isWishlisted: true } : item
      );
    },
    removeFromWishlist: (state, action) => {
        const id = action.payload;
        return state.map((item) =>
          item.id === id ? { ...item, isWishlisted: false } : item
        );
      },
  },
});

export const { setMoviesAndSeries, addUserReview, addToWishlist, removeFromWishlist } =
  moviesAndSeriesSlice.actions;
export default moviesAndSeriesSlice.reducer;
