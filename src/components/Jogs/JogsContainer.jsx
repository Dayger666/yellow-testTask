import * as React from "react";
import {connect} from "react-redux";
import Jogs from "./Jogs";
import {getJogsThunkCreator} from "../../redux/App-reducer";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";


const JogsContainer = (props) => {
    if(!props.isAuth){
        return <Redirect to={'/'}/>
    }
    return <Jogs getJogsThunkCreator={props.getJogsThunkCreator} jogs={props.jogs} filterToggle={props.filterToggle}/>

};
let mapStateToProps = (state) => {
    return {
        isAuth: state.appLoad.isAuth,
        jogs:state.appLoad.jogs,
        filterToggle: state.appLoad.filterToggle,
    }
};
export default connect(mapStateToProps, {getJogsThunkCreator})(JogsContainer);