import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn"
import "./MovieCard.css"
import { useState, useEffect } from "react"

const MovieCard = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json()

        console.log(data);
        setMovies(data.results)
        }
        fetchMovies()
    }, [])

    return (
        <div>
            {movies.map((movie) => (
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}/>
                <MarkAsSeenBtn />
            </div>
            ))}
        </div>
    )
}

export default MovieCard