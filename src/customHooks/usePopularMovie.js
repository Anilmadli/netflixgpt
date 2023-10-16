import {API_OPTIONS} from '../utils/constant'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utils/movieslice"

const usePopularMovie = ()=>{  
const dispatch = useDispatch();
const pupularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    const response = await data.json();
    dispatch(addPopularMovies(response?.results));
}
useEffect(()=>{
    pupularMovies();
},[])
}

export default usePopularMovie; 

