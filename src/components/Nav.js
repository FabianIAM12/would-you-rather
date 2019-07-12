import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                    Questions
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/points' activeClassName='active'>
                    Punkte
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
