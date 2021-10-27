import { useEffect } from 'react';

import Navbar from './components/Navbar';

import { searchMovies, getMoviesByGenre } from './services/tmdbApiService';

const App = () => {
  
  useEffect(() => {
    getMoviesByGenre(18).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    


  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
