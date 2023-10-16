const VideoTitle = ({title,overView})=>{

    return(
        <div className="p-10 pt-60 absolute aspect-video bg-gradient-to-tr from-black">
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="font-bold text-lg my-2 w-1/2 text-white">{overView}</p>
            <div className="mt-10">
                <button className="p-4 me-3 w-40 bg-white rounded font-bold hover:bg-opacity-80">Play</button>
                <button className="p-4 bg-gray-500 w-40 rounded font-bold text-white hover:bg-opacity-80">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;