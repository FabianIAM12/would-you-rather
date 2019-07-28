import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfilePictureSmall from "./ProfilPictureSmall";
import WelcomeMessage from "./WelcomeMessage";

export default function Nav () {
    return (
        <div className="ui secondary pointing menu">
            <NavLink to='/' exact activeClassName='active' className='item'>
                Would you rather?
            </NavLink>
            <NavLink to='/add' exact activeClassName='active' className='item'>
                Add new Poll
            </NavLink>
            <NavLink to='/highscore' exact activeClassName='active' className='item'>
                Highscore
            </NavLink>
            <div className="right menu">
                <div className="item">
                    <WelcomeMessage/>
                </div>
                <div className="item">
                    <ProfilePictureSmall/>
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
