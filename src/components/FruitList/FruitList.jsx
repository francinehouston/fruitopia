import "../Fruits/Fruits.css";
import styled from 'styled-components'


import React from 'react'

const FruitListContainter = styled.ul` 
list-style-type:none; 
padding:0`

const FruitName= styled.strong`
color: #77dd77`

const FruitItem= styled.li`
background-color: #fff; /* White */
    border: 1px solid #ffc2d1; /* Soft Pink border */
    border-radius: 8px;
    padding: 10px 15px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

function FruitList({ fruits }) {
    return (
        <div>
            <FruitListContainter>
                {fruits.map((fruit) => (
                    <FruitItem key={fruit.id}>
                       <FruitName>{fruit.name}</FruitName> 
                    </FruitItem>
                ))}
            </FruitListContainter>
        </div>
    )
}

export default FruitList;



