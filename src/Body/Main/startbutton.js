import React from 'react';

function StartButton(props) {

    const buttonStyle = {
        color: props.buttonColor
    }


    return (
        <div>
        <button onClick = {props.timerOn ? props.stopTimer : props.startTimer} style = {buttonStyle}>{`${props.buttonText}`}</button>
        </div>
    );
}

export default StartButton;