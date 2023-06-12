/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Header.css';
import logobeautyflix from '../../assets/beautyflix-logo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();
    const pathname = location.pathname;
    const [addButton, setAddButton] = useState(true);

    useEffect(() => {
        if (pathname != "/") {
            setAddButton(false);
        } else {
            setAddButton(true);
        }
    }, [pathname])

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'><img className='header__logo' src={logobeautyflix} alt='Logo' /></Link>
                { addButton ? <Link className='header__link' to='/addvideo'>Nuevo video</Link> : <></> }
            </div>
        </header>
    );
}

export default Header;