import React from "react";
import preloader from '../../assets/images/preloader.gif';
let Preloader=(props)=>{

    return <img className='content__preloader' src={preloader} alt='preloader'/>;
};

export default Preloader;