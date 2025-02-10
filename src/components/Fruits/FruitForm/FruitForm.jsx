import React, { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder= 'Enter fruit name'
                onChange={(e) => setName(e.target.value)}

                />
                <input 
                type="text" 
                value={emoiji}
                placeholder='Enter fruit emoiji (e.g.🍓)'
                onChange={(e)=> setEmoiji(e.target.value)}

                />
                <button type= "submit"> Add Fruit </button>
   </form>
    )
}

export default FruitForm