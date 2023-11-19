
import './style.css'

const Nav = () => {

    return (
        <>
            <header className='border flex justify-between items-center'>
                <h1 className='m-2'>
                    Zeckenrode
                </h1>
                <input className="side-menu hidden" type="checkbox" id="side-menu"/>
                <label htmlFor='side-menu' className={`m-2 md:hidden burgerstack`}>
                    <div className="burger burger1"></div>
                    <div className="burger burger2"></div>
                    <div className="burger burger3"></div>
                </label>
                <div className={`navbar hidden md:block`}>
                    <ul className={`navlist`}>
                        <li><a href="#">home</a></li>
                        <li><a href="#">skills</a></li>
                        <li><a href="#">projects</a></li>
                        <li><a href="#">experience</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Nav;