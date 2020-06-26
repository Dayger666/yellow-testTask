import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

import {setFilterToggle} from "../../redux/App-reducer";

const HeaderContainer = (props) => {
    return <Header isAuth={props.isAuth} setFilterToggle={props.setFilterToggle} filterToggle={props.filterToggle}/>
};
let mapStateToProps = (state) => {
    return {
        isAuth: state.appLoad.isAuth,
        filterToggle: state.appLoad.filterToggle,
    }
};
export default connect(mapStateToProps, {setFilterToggle})(HeaderContainer);