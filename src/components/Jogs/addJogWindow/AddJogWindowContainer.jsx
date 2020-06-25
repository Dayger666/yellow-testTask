import React from 'react';
import {connect} from "react-redux";
import AddJogWindowReduxForm from "./AddJogWindow";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addJogThunkCreator} from "../../../redux/App-reducer";

let AddJogWindowContainer = (props) => {
    const onSubmit = (startDate, values) => {
        props.addJogThunkCreator(new Date(startDate).toLocaleDateString(),values.distance,values.time);
        props.history.push('/jogs');
    };
    return <AddJogWindowReduxForm onSubmit={onSubmit}/>
};


export default compose(withRouter,connect(null, {addJogThunkCreator}))(AddJogWindowContainer);