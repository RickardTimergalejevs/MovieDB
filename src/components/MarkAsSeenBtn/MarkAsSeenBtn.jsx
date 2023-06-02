import { useEffect, useState } from "react"
import { useMyMoviesContext } from "../../context/MyMoviesContext"

const MarkAsSeenBtn = ({movie}) => {
    const [isMovieSeen, setIsMovieSeen] = useState(false)

    const { addMovie, hasSeenMovie, removeMovie } = useMyMoviesContext

    useEffect(() => {
        setIsMovieSeen(hasSeenMovie(movie.id))
    })
    
    const handleClick = (event) => {
        event.preventDefault()

        if (isMovieSeen) {
            removeMovie(movie.id)
            return
        }

        addMovie(movie)
    }

    return (
        <button onClick={handleClick}>
            {isMovieSeen ? "Remove" : "Add"}
        </button>
    )
}

export default MarkAsSeenBtn