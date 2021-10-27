import axios from 'axios';

const tmdbAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});


export const getGenres = async () => {
    
    const requestConfig = {
        method: 'GET',
        url: '/genre/movie/list',
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        }
    };

    try {
        const response = await tmdbAPI.request(requestConfig);

        if (response.status !== 200) {
            throw new Error('Something went wrong requesting the genres');
        }

        const result = response.data.genres;
        return result;

    } catch (error) {
        return error.message;
    }
}

export const searchMoviesByName = async (query = '', page, includeAdult = false, primaryReleaseYear = null) => {

    const requestConfig = {
        method: 'GET',
        url: '/search/movie',
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            query: query,
            page: page,
            include_adult: includeAdult,
            primary_release_year: primaryReleaseYear
        }
    };

    try {
        const response = await tmdbAPI.request(requestConfig);

        if (response.status !== 200) {
            throw new Error('Something went wrong requesting the movies by his name');
        }

        const result = response.data.results;
        return result;

    } catch (error) {
        return error.message;
    }
}

export const getMoviesByGenre = async (genre = '') => {
    // genre debe ser un entero

    const requestConfig = {
        method: 'GET',
        url: '/discover/movie',
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            with_genres: genre
        }
    };

    try {
        const response = await tmdbAPI.request(requestConfig);

        if (response.status !== 200) {
            throw new Error('Something went wrong requesting the movies by genre');
        }

        const result = response.data.results;
        return result;

    } catch (error) {
        return error.message;
    }
}

export const getTrendingMedia = async (typeofMedia, timeWindow) => {
    // typeofMedia debe ser 'all', 'movie', 'tv' o 'person'.
    // timeWindow debe ser 'day' o 'week'.
    
    const requestConfig = {
        method: 'GET',
        url: `/trending/${typeofMedia}/${timeWindow}`,
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        }
    };

    try {
        
        const response = await tmdbAPI.request(requestConfig);

        if (response.status !== 200) {
            throw new Error('Something went wrong requesting trending media');
        }

        const result = response.data.results;
        return result;

    } catch (error) {
        console.log(error);
    }
}