// Write your Character component here
import React from 'react';

const Character = props => {
    const { info } = props
    return (
        <h1>{info.name}</h1>
    )
}

export default Character;