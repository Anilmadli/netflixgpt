import {API_OPTIONS} from '../utils/constant'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/movieslice"

const useNowPlayingMovies = ()=>{  
const dispatch = useDispatch();
const nowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const response = await data.json();
    dispatch(addNowPlayingMovies(response?.results));
    console.log(response?.results);
}
useEffect(()=>{
    nowPlayingMovies();
},[])
}

export default useNowPlayingMovies; 

