import React,{ useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                TRAVEL<i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}> 
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-items'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/Service' className='nav-links' onClick={closeMobilemenu}>
                        Service
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/Products' className='nav-links' onClick={closeMobilemenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/Sign-Up' className='nav-links' onClick={closeMobilemenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
