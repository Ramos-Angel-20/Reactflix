import { useDispatch, useSelector } from 'react-redux';

import { getMoviesByGenre } from './context/movies/movies-actions';
import Navbar from './components/Navbar';
import Notification from './components/Notification';

const App = () => {

  const { movies } = useSelector(state => state.movies);
  const { notification } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  console.log(movies);

  return (
    <>     
      {notification && <Notification modifier={notification.status} title={notification.title} message={notification.message}/>} 
      <Navbar />
      {movies && movies.map(movie => <li key={movie.id}><p>{movie.title}</p></li> )}
      <button onClick={() => dispatch(getMoviesByGenre(28))}>FetchMovies</button>
    </>
  );
}

export default App;
