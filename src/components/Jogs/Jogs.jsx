import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
import Jog from "./Jog/Jog";
import addSvg from '../../assets/images/add.svg';

const Jogs = ({getJogsThunkCreator,jogs,filterToggle}) => {
    console.log(jogs)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    console.log(endDate);
    useEffect(() => {
        getJogsThunkCreator();
    }, []);
    const jogsElements=jogs.slice(-10).map((jog)=><Jog key={jog.id} date={jog.date} distance={jog.distance} time={jog.time}/>).reverse();
    return (
        <div className='container'>
            <div className='content__jogs'>
                {filterToggle?
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
                    </div>:null
                }
                <div className='content__jogs-list'>
                    {jogsElements}
                </div>
            </div>
            <div className='content__add-btn'>
                <img src={addSvg} alt="addBtn"/>
            </div>
        </div>
    )
};
export default Jogs;