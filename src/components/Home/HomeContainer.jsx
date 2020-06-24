import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {beginningApp} from "../../redux/App-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const HomeContainer = (props) => {
    let onClick=()=>{
        props.beginningApp().then(()=>{
            props.history.push('/jogs');
        })
    };
    return <Home onClick={onClick}/>
};

export default compose(withRouter,connect(null, {beginningApp}))(HomeContainer);