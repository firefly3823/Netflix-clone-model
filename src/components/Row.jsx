import React, { useEffect, useState } from "react"
import tmdbAxiosInstance from "../tmdbAxiosInstance"
import './Row.css'
function Row({title,fetchUrl,isPoster}) {
    // console.log(fetchUrl)
    const [allMovies,setAllMovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const fetchData = async ()=>{
        const {data} = await tmdbAxiosInstance.get(fetchUrl)
        setAllMovies(data.results)
    }
    // console.log(allMovies);
    useEffect(()=>{fetchData()},[])
    return(

        <div className="row">
        <h2>{title}</h2>
        <div className="all_movies">
            {
                allMovies.map(item=>(
                    <img className={`${isPoster && 'movie_large'} movies`} src={`${baseUrl}/${isPoster ? item.poster_path : item.poster_path}`} alt={item.name} srcset="" />
                ))
            }
        </div>
        </div>
    )
}
export default Row