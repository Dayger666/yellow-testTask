import React from "react";


const Home = (props) => {

    return (
        <div className='container'>
            <div className='content__first-page-wrapper'>
            <div className='content__first-page'>
                <div className='content__bearIMG'>
                </div>
                <div className='content__in-btn'>
                    <button onClick={props.onClick}>Let me in</button>
                </div>
            </div>
            </div>
        </div>
    )
};
export default Home;