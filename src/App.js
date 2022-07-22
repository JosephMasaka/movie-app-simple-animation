import './App.css'
import { useState, useEffect } from 'react'
import Movie from '../src/components/Movie'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'

function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState([]) 
  
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular =  async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eeb61bdc3a426b35a6564e7cfce2e1bd&language=en-US&page=1');
    const movies = await data.json();
    
    setPopular(movies.results)
    setFiltered(movies.results)
    console.log(movies.results)
  }

  return (
    <div className="App">
      <Navbar />

      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <AnimatePresence>
        <motion.div layout className='popular-movies'>
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie}/>
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
