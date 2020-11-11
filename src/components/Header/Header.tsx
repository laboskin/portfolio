import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <nav className="Header-Container">
                <a className="Header-Logo" href="/">
                    <div>A</div>
                </a>
                <ul className="Header-Nav">
                    <li className="Header-NavItem">
                        <a href="/" className="Header-NavLink">
                            About
                        </a>
                    </li>
                    <li className="Header-NavItem">
                        <a href="/" className="Header-NavLink">
                            Skills
                        </a>
                    </li>
                    <li className="Header-NavItem">
                        <a href="/" className="Header-NavLink">
                            Projects
                        </a>
                    </li>
                    <li className="Header-NavItem">
                        <a href="/" className="Header-NavLink">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="Header-Mobile">
                    <div className="Header-MobileHamburger">
                        <div className="Header-MobileHamburgerLine"/>
                    </div>
                    <div className="Header-MobileOverlay"/>
                    <aside className="Header-MobileNav">
                        <ul className="Header-MobileNavContainer">
                            <li className="Header-MobileNavItem">
                                <div className="Header-MobileNavLink">
                                    About
                                </div>
                            </li>
                            <li className="Header-MobileNavItem">
                                <div className="Header-MobileNavLink">
                                    Skills
                                </div>
                            </li>
                            <li className="Header-MobileNavItem">
                                <div className="Header-MobileNavLink">
                                    Projects
                                </div>
                            </li>
                            <li className="Header-MobileNavItem">
                                <div className="Header-MobileNavLink">
                                    Contact
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>
            </nav>
        </header>
    );
}

export default Header;
