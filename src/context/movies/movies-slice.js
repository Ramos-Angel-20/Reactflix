import { createSlice } from '@reduxjs/toolkit';

const initialMoviesSlice = {
    movies: [],
    selectedMovieId: null,
    movieData: null
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialMoviesSlice,
    reducers: {
        setMovieList(state, action) {
            state.movies = action.payload.movies
        },
        cleanMovieList(state) {
            state.movies = [];
        },
        setSelectedMovieId(state, action) {
            state.selectedMovieId = action.payload.id;
        },
        setMovieData(state, action) {
            state.movieData = action.payload.data;
        }
    }
});

export const movieActions = moviesSlice.actions;
export default moviesSlice;