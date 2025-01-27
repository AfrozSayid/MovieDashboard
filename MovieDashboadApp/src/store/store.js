import { configureStore } from '@reduxjs/toolkit';
import moviesAndSeriesReducer from './moviesAndSeriesSlice';

const store = configureStore({
    reducer: {
        moviesAndSeries: moviesAndSeriesReducer,
    }
})

export default store;