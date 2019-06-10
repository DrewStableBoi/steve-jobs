import React from 'react';

function Counter(props) {

    return (
        <div className = "counterStyle">
        Times Used: {props.counter}
        </div>
    )
}

export default Counter;
