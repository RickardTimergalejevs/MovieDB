import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const MovieDetails = () => {
    const [movie, setMovie] = useState()

    const { id } = useParams()

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
            const data = await res.json()

            setMovie(data)
        }

        fetchMovie()
    }, [])

    return (
        <div>
            <MarkAsSeenBtn />
        </div>
    )
}

export default MovieDetails