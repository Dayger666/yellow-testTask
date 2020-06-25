import React from 'react';
import {connect} from "react-redux";
import AddJogWindowReduxForm from "./AddJogWindow";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

let AddJogWindowContainer = (props) => {
    console.log('123');
    const onSubmit = (startDate, values) => {
        console.log(startDate);
        console.log(values);
        props.history.push('/jogs');
    };
    return <AddJogWindowReduxForm onSubmit={onSubmit}/>
};


export default compose(withRouter,connect(null, {}))(AddJogWindowContainer);