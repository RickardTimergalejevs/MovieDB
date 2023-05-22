import FilterDropdown from "../FilterDropdown/FilterDropdown"
import MovieCard from "../MovieCard/MovieCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./MovieList.css"

const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
            const data = await res.json()

            setMovies(data.results)
        }

        fetchMovies()
    }, [])

    return (
        <div className="movie_list">
            <div className="movie_list_filter">
                <h4>Filter movies</h4>
                <FilterDropdown />
            </div>
            {console.log(import.meta.env.VITE_API_KEY)}
            <h2>Popular movies</h2>
            <div className="movie_grid">
            {movies.map((movie) => (
                <Link to={`/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie} />
                </Link>
            ))}
            </div>
        </div>
    )
}

export default MovieList