// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 100 %;
    padding: 8px; 
    color: Gold;
    background-color:black;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
        

    h1{
        display: flex;
        justify-content: center; 
    }
    
    h2{
        display: flex;
        justify-content: space-evenly;
        color: white;
    }
`

const Character = props => {
    const { info } = props
    return (
        <StyledCharacter>
        <h1>{info.name} {info.birth_year}</h1>
        <h2>{info.films}</h2>
        </StyledCharacter>
    )
}

export default Character;