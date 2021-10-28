import { uiActions } from '../ui/ui-slice';
import { movieActions } from './movies-slice';
import * as apiService from '../../services/tmdbApiService';

export const getMoviesByGenre = (genre) => {

    return dispatch => {

        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Fetching',
            message: 'fetching movies'
        }));

        apiService.getMoviesByGenre(genre)
            .then(res => {

                dispatch(movieActions.setMovieList({
                    movies: res
                }));

                dispatch(uiActions.showNotification({
                    status: 'fulfilled',
                    title: 'Fulfilled',
                    message: 'Movies were succesfully fetched'
                }));

                // Reseteamos la notificación despues de 2seg para quitarla de la UI.
                setTimeout(() => {
                    dispatch(uiActions.resetNotification());
                }, 2000);


            }).catch(err => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'An error occured while fetching the movies'
                }));
                
                // Reseteamos la notificación despues de 2seg para quitarla de la UI.
                setTimeout(() => {
                    dispatch(uiActions.resetNotification());
                }, 2000);
            });
    }
}