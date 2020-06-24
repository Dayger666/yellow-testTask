import React from 'react';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomeContainer from "./components/Home/HomeContainer";
import JogsContainer from "./components/Jogs/JogsContainer";


let App = () => {
    return (
        <div className='wrapper'>
            <HeaderContainer/>
            <div className='content'>
                <Route path="/" render={() => <HomeContainer/>} exact />
                <Route path="/jogs" component={JogsContainer} exact />
            </div>
        </div>
    );

};


export default App;
