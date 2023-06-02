import { createContext, useContext, useState } from "react";

const MyMoviesContext = createContext(null)
export const useMyMoviesContext = () => useContext(MyMoviesContext)

const MyMoviesProvider = ({ children }) => {
    const [myMovies, setMyMovies] = useState([])
    
    const addMovie = (movie) => {
        setMyMovies([...myMovies, movie])
    }

    const removeMovie = (movieId) => {
        const newMovieList = myMovies.filter(m => m.id !== movieId)
        setMyMovies(newMovieList)
    }

    const hasSeenMovie = (movieId) => {
        return myMovies.some(m => m.id === movieId)
    }

    return (
        <MyMoviesContext.Provider value={{ myMovies, addMovie, removeMovie, hasSeenMovie }} >
            {children}
        </MyMoviesContext.Provider>
    )
}

export default MyMoviesProvider