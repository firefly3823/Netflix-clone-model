import React, { useEffect, useState } from "react"
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Banner.css'

function Banner({ fetchUrl }) {
    const [movies, setMovies] = useState({})
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        setMovies(data.results[Math.floor(Math.random() * data.results.length)])

        // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    }
        useEffect(() => { fetchData() }, [])
        return (
            <div className="Banner_container" style={{
                height:"600px",
                backgroundImage:`url(${baseUrl}/${movies.backdrop_path})`,
                backgroundSize:"cover",
                backgroundAttachment:"fixed",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
                
            }}>
                <div className="name-container">
                    <h1 style={{paddingBottom:"10px"}}>{movies.name}</h1>
                    <h2>{movies.overview?.slice(0,280)}...</h2>
                </div>
            </div>
        )
    }
export default Banner;