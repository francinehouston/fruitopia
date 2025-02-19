import React, { useState } from 'react'
import styled from "styled-components"

const FormContainer = styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff5f5; /* Cream White */
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 400px;
    margin: 20px auto;
`;

const Label =styled.label`
font-size: 1.2rem;
    font-weight: bold;
    color: #663300; /* Chocolate Brown */
    margin-bottom: 8px;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
border: 2px solid #ff6384; /* Strawberry Red */
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: #77dd77; /* Leaf Green */
    }

`;

const Button = styled.button`
margin-top: 10px;
    background-color: #ff6384; /* Strawberry Red */
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ffc2d1; /* Soft Pink */
    }
`;

function FruitForm({addFruit}) {
const [name,setName] = useState("");
const [emoiji, setEmoiji] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault(); 
       addFruit(name,emoiji);
       setName("");
       setEmoiji("");

    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Label>Fruit Name:</Label>
            <Input
                type="text"
                value={name}
                placeholder= 'Enter fruit name'
                onChange={(e) => setName(e.target.value)}

                />
                <Label>Fruit Emoji:</Label>
                <Input 
                type="text" 
                value={emoiji}
                placeholder='Enter fruit emoiji (e.g.🍓)'
                onChange={(e)=> setEmoiji(e.target.value)}

                />
                <Button type= "submit"> Add Fruit </Button>
   </FormContainer>
    )
}

export default FruitForm