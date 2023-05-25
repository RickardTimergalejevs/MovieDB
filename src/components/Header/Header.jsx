import NavLinks from "../NavLinks/NavLinks"
import MyMovies from "../MyMovies/MyMovies"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return(
        <header>
            <Link to="/">
            <h1>Movies<span>DB</span></h1>
            </Link>
            <div>
            <NavLinks />
            <MyMovies />
            </div>
        </header>
    )
}

export default Header