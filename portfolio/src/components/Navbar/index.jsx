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
            <header>
                <h1>Navigation</h1>
                <button className={`burgerstack ${hamburgerActive}`} onClick={handleHamburger}>
                    <div className="burger burger1"></div>
                    <div className="burger burger2"></div>
                    <div className="burger burger3"></div>
                </button>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </>
    )
};

export default Nav;