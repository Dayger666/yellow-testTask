import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
import Jog from "./Jog/Jog";
import addSvg from '../../assets/images/add.svg';
import sadSmile from '../../assets/images/sad-rounded-square-emoticon.svg';
import {NavLink} from "react-router-dom";

const Jogs = ({getJogsThunkCreator, jogs, filterToggle}) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    useEffect(() => {
        getJogsThunkCreator();
    }, []);
    let sortedElements;
    if (startDate !== '' && endDate !== '' && filterToggle) {
        sortedElements = jogs.filter((jog) => startDate <= (jog.date + "000") && endDate >= (jog.date + "000"));
    } else {
        sortedElements = jogs;
    }
    let jogsElements = sortedElements.slice(-10).map((jog) => <Jog key={jog.id} date={jog.date} distance={jog.distance}
                                                                   time={jog.time}/>).reverse();
    console.log(jogsElements.length);
    return (
        <div className='container'>
            <div className='content__jogs'>
                {filterToggle ?
                    <div className='filter'>
                        <div className='filter__item'>
                            <div>Date from</div>
                            <div className='filter__container'>
                                <DatePicker
                                    className='filter__datepicker'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="dd.MM.yyyy"
                                />
                            </div>
                        </div>
                        <div className='filter__item'>
                            <div>Date to</div>
                            <div className='filter__container'><DatePicker
                                className='filter__datepicker'
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="dd.MM.yyyy"
                            /></div>
                        </div>
                    </div> : null
                }
                {jogsElements.length !== 0 ? <>
                    <div className='content__jogs-list'>
                        {jogsElements}
                    </div>
                    <NavLink to={'/addJog'}>
                        <div className='content__add-btn'>
                            <img src={addSvg} alt="addBtn"/>
                        </div>
                    </NavLink></> : <div className='content__empty'>
                    <div className='content__nothing-block'>
                        <img src={sadSmile} alt="sad-smile"/>
                        <div>Nothing is there
                        </div>
                    </div>
                    <div className='content__create-jog'>
                        <NavLink to={'/addJog'}>
                        <button>Create your jog first</button>
                        </NavLink>
                    </div>
                </div>
                }
            </div>
        </div>
    )
};
export default Jogs;