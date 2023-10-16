
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieslice";
const useMovieTrailer = (useMovieId)=>{
    const dispatch = useDispatch();
   
    const getMovieVideos = async()=>{
        const data =  await fetch("https://api.themoviedb.org/3/movie/"+useMovieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterdData = json.results.filter((item)=> item.type === "Trailer");
        const trailer = filterdData.length ? filterdData[0]: json.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer