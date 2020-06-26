import React from 'react';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomeContainer from "./components/Home/HomeContainer";
import JogsContainer from "./components/Jogs/JogsContainer";
import AddJogWindowContainer from "./components/Jogs/addJogWindow/AddJogWindowContainer";
import Info from "./components/Info/Info";


let App = () => {
    return (
        <div className='wrapper'>
            <HeaderContainer/>
            <div className='content'>
                <Route path="/let-me-in" render={() => <HomeContainer/>} exact />
                <Route path="/jogs" component={JogsContainer} exact />
                <Route path="/addJog" render={() => <AddJogWindowContainer/>} />
                <Route path="/info" component={Info} exact />

            </div>
        </div>
    );

};


export default App;
