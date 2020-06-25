import * as React from "react";
import {connect} from "react-redux";
import Jogs from "./Jogs";
import {getJogsThunkCreator} from "../../redux/App-reducer";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";


const JogsContainer = (props) => {
    if(!props.isAuth){
        return <Redirect to={'/let-me-in'}/>
    }
    return <Jogs getJogsThunkCreator={props.getJogsThunkCreator} jogs={props.jogs} filterToggle={props.filterToggle} isFetching={props.isFetching}/>

};
let mapStateToProps = (state) => {
    return {
        isAuth: state.appLoad.isAuth,
        jogs:state.appLoad.jogs,
        filterToggle: state.appLoad.filterToggle,
        isFetching: state.appLoad.isFetching,
    }
};
export default connect(mapStateToProps, {getJogsThunkCreator})(JogsContainer);