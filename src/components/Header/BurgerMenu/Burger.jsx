import React from "react";
import menuIcon from '../../../assets/images/sideLogo.png';
import cancelIcon from '../../../assets/images/sideCancel.png';
import {NavLink} from "react-router-dom";

let Burger=({burgerToggle,setBurgerToggle})=>{
    let drawerClasses = 'header__side-drawer';
    if (burgerToggle) {
        drawerClasses = 'header__side-drawer status status_open';
    }
    const handleClick=(e)=>{
        setBurgerToggle(false);
    };
    return (
        <div className={drawerClasses}>
            <div className='header__sideNav'>
                <div className='header__side-nav-logo'><NavLink onClick={handleClick} to={'/let-me-in'}><img src={menuIcon} alt="sideIcon"/></NavLink></div>
                <div className='header__side-nav-cancel'><img onClick={handleClick} src={cancelIcon} alt="sideCancel"/></div>
            </div>
            <div className='header__sideItems'>
                <div className='header__sideItem'><NavLink onClick={handleClick} activeClassName='header__side-active' to={'/jogs'}>Jogs</NavLink></div>
                <div className='header__sideItem'><NavLink onClick={handleClick} activeClassName='header__side-active' to={'/info'}>Info</NavLink></div>
                <div className='header__sideItem'><NavLink onClick={handleClick} activeClassName='header__side-active' to={'/contact-us'}>Contact us</NavLink></div>
            </div>
        </div>
    )
};
export default Burger;