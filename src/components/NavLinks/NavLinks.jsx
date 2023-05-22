import "./NavLinks.css"
import { NavLink } from "react-router-dom"

const NavLinks = () => {
    return (
            <ul>
                <NavLink to="/">
                <li>Movies</li>
                </NavLink>

                <NavLink to="/about">
                <li>About</li>
                </NavLink>

                <NavLink to="/contact">
                <li>Contact</li>
                </NavLink>
            </ul>
    )
}

export default NavLinks