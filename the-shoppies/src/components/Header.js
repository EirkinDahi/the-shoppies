import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className = 'inner-content'>
                    <div className ="brand">
                        <Link to="/"> <img src ={logo} width="38" height ="38"/> <i>the shoppies</i></Link>
                    </div>
                </div>
            </div>
        </header>    
    );
}

export default Header;
