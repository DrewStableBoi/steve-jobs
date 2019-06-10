import React from 'react';

function Timer(props) {
      return(
        <div>
          Time Left: {props.time <= 1? `${props.time} Second` : `${props.time} Seconds`}
        </div>
      );
  }

  export default Timer;