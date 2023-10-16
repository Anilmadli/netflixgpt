import { useSelector } from "react-redux"

const SecondaryContainer = ()=>{

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    return(
        <div>
            
        </div>
    )
}

export default SecondaryContainer