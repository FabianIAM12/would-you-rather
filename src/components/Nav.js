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
                    <NavLink to='/add' exact activeClassName='active'>
                    Add new Poll
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
