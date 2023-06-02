import "./MyMovies.css"
import { FiEye } from "react-icons/fi"
import useMyMoviesContext from "../../context/MyMoviesContext"

const MyMovies = () => {

    const {MyMovies} = useMyMoviesContext()
    return (
        <div className="my_movies">
            <p>{MyMovies.length}</p>
            <FiEye />
        </div>
    )
}

export default MyMovies