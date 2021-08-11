import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/Logo-2.png'
import {Link, useLocation} from 'react-router-dom'
import '../styles/header.css';

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },
]

export default function Header() {

    const {pathname} = useLocation();
    const activeNav = mainNav.findIndex(e => e.path === pathname);
    const [isClick, setIsClick] = useState(true);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    const headerRef = useRef(null);
    const handleScroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add("shrink");
        } else {
            headerRef.current.classList.remove("shrink");
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
             window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
            <div className="header__menu__logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                <div className="header__menu">
                    <div className="header__menu__left">
                        <div onClick={handleClick} className="header__menu__left__toggle">
                            <i className={isClick ? "fas fa-bars" : "fas fa-times"}></i>
                        </div>
                        <div className={isClick ? "header__menu__left__list" : "header__menu__left__list__activeClick"}>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={`header__menu__left__item ${index === activeNav ? 'active' : ''}`}>
                                    <Link to={item.path}>
                                        <span onClick={() => setIsClick(true)}>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    
                    <div className="header__menu__right">
                        <div className="header__menu__right__item">
                            <Link to='/search'><i className="fas fa-search"></i></Link>
                        </div>
                        <div className="header__menu__right__item">
                            <Link to='/shopcart'><i className="fas fa-shopping-bag"></i></Link>
                        </div>
                        <div className="header__menu__right__item">
                            <Link to="/login"><i className="fas fa-user"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
