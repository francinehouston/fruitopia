import { useState } from "react"
import React from 'react'
import { show } from '../../../services/fruitService';
import FruitDetail from "./FruitDetail/FruitDetail";
import { Navigate, useNavigate } from "react-router";

function FruitSearch() {

    const [fruit,setFruit] = useState('')
    const [fruitData, setFruitData]= useState('')
    const navigate =useNavigate();
    const handleSubmit = async (e) => {
        // console.log('type a fruit name')
        e.preventDefault();
        if(!fruit.trim()) return;
        try{
            const data = await show(fruit);
            // setFruitData(data)
            Navigate("/", { state: {fruitData:data } })
        } catch (error){
console.error("Failed to fetch Fruit data:", error);
        }
setFruit('')
    }
console.log(fruitData,"data from search")
  return (
    <div>
       <section>
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor= "fruit">Enter a fruit:</label>
            <input 
            type="text"
            name="fruit"
            value={fruit}
            id="fruit"
            onChange={(e) => setFruit(e.target.value)} />
        <button type='submit'>Search</button>

        </form>
       </section>
       <h1>Fruit List</h1>
       <FruitDetail fruit={fruitData} />

        </div>
  )
}

export default FruitSearch;