const BASE_URL = "http://localhost:5005/fruits-api"

export const getAllFruits = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        // console.log("Fetched Data from Backend:",data);
        return data
    } catch (error) {
        console.error("Error fetching all fruits: ", error);
        return [];
    }
}
//getAllFruits();

export const show = async (fruit) => {
    try {
const res = await fetch(`${BASE_URL}?name=${fruit}`)
const data = await res.json();
const selectFruit = data.find(item => item.name.toLowerCase() === fruit.toLowerCase());
 if (selectFruit) {
    console.log("Selected Fruit Data: ", selectFruit)
    return selectFruit;
 } else {   
    return null;
 }
    } catch (error){
        console.log("Error Fetching fruit data :", error)
    }
}

show('apple');
