import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath})=>{
     return(
        <div className="w-40 m-1">
            <img src={IMG_CDN_URL + posterPath} alt="movie-img" />
        </div>

     )
}

export default MovieCard;   