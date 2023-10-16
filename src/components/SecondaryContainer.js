import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movies = useSelector(store => store.movies);
    console.log(movies);
    return(
        movies &&(
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies} />
        </div> 
        )
    )
}

export default SecondaryContainer