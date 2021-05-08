import React from 'react';

export const Nominate = (props) => {

    return (
        <div className = 'nominate-page'>
            <div className = 'container'>
                <div className ='nominate-content'>
                    <div className= 'input-wrapper'>
                        <input type ="text" placeholder ="Search movie titles" value = {props.value} onChange = {(event)=>props.setSearchValue(event.target.value)}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nominate;