import MovieCard from "./MovieCard";

const MovieList = ({title, movies})=>{
    console.log(movies)
    return(
        <div className="p-2 bg-black">
            <h1 className="p-2 text-3xl text-white">{title}</h1>
        
        <div className="flex overflow-x-scroll">
            <div className="flex">
               {movies && movies.map((item)=>(
                <MovieCard key={item.id} posterPath={item?.poster_path}/>
               )) 
               }
            </div>
        </div>
        </div>
    )
}

export default MovieList;


