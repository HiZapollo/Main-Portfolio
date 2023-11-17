import { useState } from 'react';

import './style.css'

const Nav = () => {

    const [hamburgerActive, setHamburgerActive] = useState('inactive')

    const handleHamburger = () => {
        if (hamburgerActive === 'active') {
            setHamburgerActive('inactive')
        } else {
            setHamburgerActive('active')
        }
    }

    return (
        <>
            <header className='border flex justify-between items-center'>
                <h1 className='m-2'>
                    Zeckenrode
                </h1>
                <button className={`m-2 md:hidden burgerstack ${hamburgerActive}`} onClick={handleHamburger}>
                    <div className="burger burger1"></div>
                    <div className="burger burger2"></div>
                    <div className="burger burger3"></div>
                </button>
                <div className={`navbar hidden md:block ${hamburgerActive}`}>
                    <ul className='navlist'>
                        <li>home</li>
                        <li>skills</li>
                        <li>projects</li>
                        <li>experience</li>
                        <li>contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Nav;