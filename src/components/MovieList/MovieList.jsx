import FilterDropdown from "../FilterDropdown/FilterDropdown"
import MovieCard from "../MovieCard/MovieCard"

const MovieList = () => {
    return (
        <div>
            {console.log(import.meta.env.VITE_API_KEY)}
            <FilterDropdown />
            <MovieCard />
        </div>
    )
}

export default MovieList