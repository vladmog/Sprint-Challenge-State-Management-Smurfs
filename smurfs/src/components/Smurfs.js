import React from 'react';
import Smurf from './Smurf';

function Smurfs(props) {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf key = {Math.random()} smurf = {smurf} />
                )
            })}
        </div>
    )
}

export default Smurfs;