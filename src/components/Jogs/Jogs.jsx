import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css'
import Jog from "./Jog/Jog";
import addSvg from '../../assets/images/add.svg';
import sadSmile from '../../assets/images/sad-rounded-square-emoticon.svg';
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader";
import Pagination from '@material-ui/lab/Pagination';

const Jogs = ({getJogsThunkCreator, jogs, filterToggle, isFetching, pageSize, totalJogsCount}) => {
    const [startDate, setStartDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [endDate, setEndDate] = useState('');
    useEffect(() => {
        getJogsThunkCreator();
    }, []);
    let sortedElements;
    let subarray = [];
    if (startDate !== '' && endDate !== '' && filterToggle) {
        console.log(startDate);
        console.log(endDate);
        console.log(new Date(1593129600000));
        sortedElements = jogs.filter((jog) => startDate <= (jog.date + "000") && endDate >= (jog.date + "000"));
    } else {
        sortedElements = jogs;
    }
    let jogsElements = sortedElements.map((jog) => <Jog key={jog.id} date={jog.date} distance={jog.distance}
                                                        time={jog.time}/>).reverse();
    let pagesCount = Math.ceil(jogsElements.length / pageSize);
    for (let i = 0; i < pagesCount; i++) {
        subarray[i] = jogsElements.slice((i * pageSize), (i * pageSize) + pageSize);
    }
    return (
        <div className='container'>
            <div className='content__jogs-wrapper'>
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
                                        withPortal
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
                                    withPortal
                                /></div>
                            </div>
                        </div> : null
                    }
                    {isFetching ? <div className='content__jogs-list'><Preloader/></div> : <>
                        {
                            jogsElements.length !== 0 ? <>
                                <div className='content__jogs-list'>
                                    {subarray[currentPage-1]}
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
                    </>
                    }
                </div>
                <div className='content__pagination'><Pagination onChange={(event, value) => {
                    setCurrentPage(value)
                }} count={pagesCount}/></div>
            </div>
        </div>
    )
};
export default Jogs;