import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__content container'>
                <div className="navbar__content__desktop-logo">
                    <h1>Reactflix</h1>
                </div>

                <div className="navbar__content__mobile-logo">
                    <h1>RF</h1>
                </div>

                <div className='navbar__content__search-bar'>
                    <BiSearchAlt className='navbar__content__search-bar__icon'/>
                    <input type="text" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
