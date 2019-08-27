import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header =()=> (
    <div className="header">
        <Link classname="logo-container" to='/'>
            <Logo className='logo/'/>
        </Link>
        <dib className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
        </dib>
    </div>
)

export default  Header;