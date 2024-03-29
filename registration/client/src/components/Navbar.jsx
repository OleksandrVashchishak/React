import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
 
 

const Navbar = () => {
    const history = useHistory()
    const auth = React.useContext(AuthContext)
    const logautHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to='/create'>Create</NavLink></li>
                    <li><NavLink to='/links'>Links</NavLink></li>
                    <li><a href="/" onClick={logautHandler}>Exit</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
