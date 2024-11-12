import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Header.component.css';

const Header = () => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuVisible(!isSubmenuVisible);
    };

    const handleOpenMenu = () => {
        setIsSubmenuVisible(false);
    };

    const handleCloseMenu = () => {
        document.getElementById("nav__input").checked = false;
        setIsSubmenuVisible(false); // Close the submenu as well
    };

    return (
        <header className="header">
            <input type="checkbox" id="nav__input" className="nav__input" />
            <label htmlFor="nav__input" className="nav__bars-btn">
                <i className="fa-solid fa-bars"></i>
            </label>
            <div className="nav__overlay" onClick={handleCloseMenu}></div>
            <nav className="nav__mobile">
                <div onClick={handleCloseMenu} className="nav__mobile-close">   <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className="nav__list_mobile">
                    <li><Link to="/homePage" className="nav_link_mobile" onClick={handleCloseMenu}>TRANG CHỦ</Link></li>
                    <li>
                        <Link to="/productPage" className="nav_link_mobile" onClick={toggleSubmenu}>
                            DANH MỤC <i className="fa-solid fa-caret-down"></i>
                        </Link>
                        {isSubmenuVisible && (
                            <ul className='nav-menu-2-mobile'>
                                <li className='nav-item-2'>
                                    <Link to="/hamsterPage" className="link" onClick={handleOpenMenu}>
                                    <i class="fa-solid fa-angle-right"></i> Hamster
                                    </Link>
                                </li>
                                <li className='nav-item-2'>
                                    <Link to="/foodPage" className="link" onClick={handleOpenMenu}>
                                    <i class="fa-solid fa-angle-right"></i> Thức ăn
                                    </Link>
                                </li>
                                <li className='nav-item-2'>
                                    <Link to="/cagePage" className="link" onClick={handleOpenMenu}>
                                    <i class="fa-solid fa-angle-right"></i>  Lồng
                                    </Link>
                                </li>
                                <li className='nav-item-2'>
                                    <Link to="/toyPage" className="link" onClick={handleOpenMenu}>
                                    <i class="fa-solid fa-angle-right"></i> Đồ chơi
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/contactPage" className="nav_link_mobile" onClick={handleCloseMenu}>LIÊN HỆ</Link></li>
                    <li><Link to="/blogPage" className="nav_link_mobile" onClick={handleCloseMenu}>BLOG</Link></li>
                    <li><Link to="/aboutPage" className="nav_link_mobile" onClick={handleCloseMenu}>VỀ CHÚNG TÔI</Link></li>
                    <li><Link to="/cartPage" className="nav_link_mobile" onClick={handleCloseMenu}>GiỎ HÀNG</Link></li>
                    <li><Link to="/loginPage" className="nav_link_mobile" onClick={handleCloseMenu}>TÀI KHOẢN</Link></li>
                </ul>
            </nav>
            <div className="content_left">
                <img src="/img/logo_hamster.png" alt="" />
                <span className="name_brand">Hamster King</span>
            </div>
            <div className="navbar">
                <ul>
                    <li className='nav-item'><Link to="/homePage" className="link">TRANG CHỦ</Link></li>
                    <li className='nav-item'><Link to="/productPage" className="link">DANH MỤC</Link>
                        <ul className='nav-2'>
                            <li className='nav-item-2'><Link to="/hamsterPage" className="link">Hamster</Link></li>
                            <li className='nav-item-2'><Link to="/foodPage" className="link">Thức ăn</Link></li>
                            <li className='nav-item-2'><Link to="/cagePage" className="link">Lồng</Link></li>
                            <li className='nav-item-2'><Link to="/toyPage" className="link">Đồ chơi</Link></li>
                        </ul>
                    </li>
                    <li className='nav-item'><Link to="/contactPage" className="link">LIÊN HỆ</Link></li>
                    <li className='nav-item'><Link to="/blogPage" className="link">BLOG</Link></li>
                    <li className='nav-item'><Link to="/aboutPage" className="link">VỀ CHÚNG TÔI</Link></li>
                </ul>
            </div>
            <div className="content_right">
                <Link to="/loginPage" className="link"><i className="fa-solid fa-user"></i></Link>
                <Link to="/cartPage" className="link"><i className="fa-solid fa-cart-shopping"></i></Link>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </header>
    );
}

export default Header;
