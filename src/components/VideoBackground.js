 import {useSelector } from "react-redux/es/hooks/useSelector";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({movieId})=>{
    useMovieTrailer(movieId);
    const getTrailerId = useSelector(store => store.movies?.trailerVideo?.key)
    return(
        <div>
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+ getTrailerId + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    )
}

export default VideoBackground;
