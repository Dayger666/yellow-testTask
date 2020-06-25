import React, {useState} from 'react';
import logo from '../../../assets/images/icon.svg';
import {Field, reduxForm} from "redux-form";
import DatePicker from "react-datepicker/es";
import cancelSvg from '../../../assets/images/cancel.svg';
import 'react-datepicker/dist/react-datepicker.css'
import {NavLink} from "react-router-dom";
const AddJogWindow = (props) => {
    const [startDate, setStartDate] = useState('');
    console.log('12');
    return (
        <div className='form'>
            <form className='form__window' onSubmit={props.handleSubmit((values) => {
                props.reset();
                props.onSubmit(startDate, values);
            })}>
                <div className='form__cancel-btn'><NavLink to={'/jogs'}><img src={cancelSvg} alt="closeBtn"/></NavLink></div>
                <div className='form__items'>
                <div className='form__item'>
                    <div className='form__text'>Distance</div>
                    <Field className='form__field'
                           name={'distance'}
                           component={'input'}
                    />
                </div>
                <div className='form__item'>
                    <div className='form__text'>Time</div>
                    <Field className='form__field'
                           name={'time'}
                           component={'input'}
                    />
                </div>
                <div className='form__item'>
                    <div className='form__text'>Date</div>
                    <DatePicker className='form__field' selected={startDate} onChange={date => setStartDate(date)}/>
                </div>

                <button type='submit' className='form__save-btn'>Save</button>
                </div>
            </form>
        </div>
    );
};
let AddJogWindowReduxForm = reduxForm({
    form: 'addJog'
})(AddJogWindow);
export default AddJogWindowReduxForm;