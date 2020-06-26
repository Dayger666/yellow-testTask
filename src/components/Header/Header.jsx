import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logoSvg from '../../assets/images/logo.svg';
import filterActiveSvg from '../../assets/images/filter-active.svg';
import filterSvg from '../../assets/images/filter.svg';
import menuIcon from '../../assets/images/menu.png';
import Burger from "./BurgerMenu/Burger";


const Header = (props) => {
    let [burgerToggle,setBurgerToggle]=useState(false);
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <NavLink to={'/let-me-in'}>
                        <img src={logoSvg} alt="teddy logo"/>
                    </NavLink>
                </div>
                {props.isAuth ?
                    <div className='header__nav-items'>
                        <div className='header__nav-item item item_link'><NavLink activeClassName='header__active' to={'/jogs'}>JOGS </NavLink></div>
                            <div className='header__nav-item item item_link'><NavLink activeClassName='header__active' to={'/info'}>INFO</NavLink></div>
                            <div className='header__nav-item item item_link'><NavLink activeClassName='header__active' to={'/contactUS'}>CONTACT US </NavLink></div>
                        <div onClick={() => {
                            props.setFilterToggle();
                        }} className='header__nav-item item item_f'>{props.filterToggle ?
                            <img className='active' src={filterActiveSvg} alt="filter-active"/> :
                            <img src={filterSvg} alt=""/>}</div>
                        <div className='header__nav-item item item_m'><img onClick={()=>{setBurgerToggle(true)}} src={menuIcon} alt="burger"/></div>
                    </div> : null
                }
                <Burger burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle}/>
            </div>
        </div>
    )
};
export default Header;