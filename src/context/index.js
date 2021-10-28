import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './movies/movies-slice';
import uiSlice from './ui/ui-slice';


// todo crear un genre slice.
const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;