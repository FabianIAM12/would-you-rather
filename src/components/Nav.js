import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Would you rather?
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>
                        Add new Poll
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/highscore' exact activeClassName='active'>
                        Highscore
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
