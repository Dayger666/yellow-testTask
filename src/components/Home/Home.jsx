import React from "react";
import bearSvg from '../../assets/images/bear-face.svg';
import {authAPI} from "../../api/api";
import {NavLink, Redirect} from "react-router-dom";

const Home = (props) => {

    return (
        <div className='container'>
            <div className='content__first-page-wrapper'>
            <div className='content__first-page'>
                <div className='content__bearIMG'>
                    <img src={bearSvg} alt="bear"/>
                </div>
                <div className='content__in-btn'>
                    <button onClick={props.onClick}>Let me in</button>
                </div>
            </div>
            </div>
        </div>
    )
};
export default Home;