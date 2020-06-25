import React from 'react';
import logo from '../../../assets/images/icon.svg';

const Jog = ({date,distance,time}) => {
    let speed = distance / time;
    let convSpeed = Math.floor(speed * 100) / 100;
    let newDate=new Date(+(date+'000')).toLocaleDateString();
    return (
        <div className='jog'>
            <img src={logo} alt="speedLogo"/>
            <div className='jog__items'>
                <div className='jog__item item item_d'>
                    <span>{newDate}</span>
                </div>
                <div className='jog__item'>
                   Speed: <span>{convSpeed}</span>
                </div>
                <div className='jog__item'>
                   Distance: <span>{distance+' km'}</span>
                </div>
                <div className='jog__item'>
                    Time: <span>{time+' min'}</span>
                </div>
            </div>
        </div>
    );
};
export default Jog;