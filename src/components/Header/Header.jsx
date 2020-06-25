import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logoSvg from '../../assets/images/logo.svg';
import filterActiveSvg from '../../assets/images/filter-active.svg';
import filterSvg from '../../assets/images/filter.svg';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='container'>

                <div className='header__logo'>
                    <NavLink to={'/'}>
                        <img src={logoSvg} alt="teddy logo"/>
                    </NavLink>
                </div>
                {props.isAuth ?
                    <div className='header__nav-items'>
                        <div className='header__nav-item'><NavLink activeClassName='header__active' to={'/jogs'}>JOGS </NavLink></div>
                            <div className='header__nav-item'><NavLink activeClassName='header__active' to={'/info'}>INFO</NavLink></div>
                            <div className='header__nav-item'><NavLink activeClassName='header__active' to={'/contactUS'}>CONTACT US </NavLink></div>
                        <div onClick={() => {
                            props.setFilterToggle();
                        }} className='header__nav-item item item_f'>{props.filterToggle ?
                            <img className='active' src={filterActiveSvg} alt="filter-active"/> :
                            <img src={filterSvg} alt=""/>}</div>
                    </div> : null
                }
            </div>
        </div>
    )
};
export default Header;