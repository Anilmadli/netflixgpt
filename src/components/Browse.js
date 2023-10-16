import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../customHooks/usePopularMovie";
const Browse = ()=>{
    useNowPlayingMovies()
    usePopularMovie();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;