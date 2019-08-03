import React from 'react'
import {NavLink} from 'react-router-dom'
import WelcomeMessage from "./WelcomeMessage";

export default function Nav() {
    return (
        <div className="ui secondary pointing menu">
            <NavLink to='/' exact activeClassName='active' className='item'>
                Would you rather?
            </NavLink>
            <NavLink to='/add' exact activeClassName='active' className='item'>
                Add new Poll
            </NavLink>
            <NavLink to='/leaderboard' exact activeClassName='active' className='item'>
                Leaderboard
            </NavLink>
            <div className="right menu">
                <div className="item">
                    <WelcomeMessage/>
                </div>
                <div className="item">
                    <div className="ui primary button">
                        <NavLink to='/logout' exact activeClassName='active'>
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
