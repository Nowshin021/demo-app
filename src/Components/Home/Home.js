//Home. js file will contain the APi calling and hit and then return the values to COuntries.js
import React from "react"
import { useState, useEffect } from "react"
import {Container,Row,Button} from 'react-bootstrap';
import Meals from './Meals/Meals.js';
import Loader from './ui/Loader.js';
import './Home.css'
//import Popup from "../Popup/Popup.js";

const Home=()=>{

    //UseStates : 
    const[meal , setmeal]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[search , setSearch]=useState('')
    const[query, setQuery]=useState('')


    
    //takes and sets the complete String of user search item
    const updateSearch=(e)=>{
        e.preventDefault()
        setSearch(query)

    }
    //takes in the query of user and sets it 
    const onChange =(e)=>{
        let res=e.target.value;
        setQuery(res)
        console.log(res)
       

    }
   
    //fetches the actual data based on user query
    const getData=()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=> {
            if(data.meals===null){
                alert("Not Found :(");
                //<Popup></Popup>
            }
            else {
                
            setmeal(data?.meals);
            setIsLoading(false)
            console.log(data?.meals)
            }

        })


    }

    //activates the fetch methods taking the search value (search=actual value string of user)
    useEffect(() => {
        getData()
    },[search])


    //console.log("Query :  ", query)
   // console.log("Setmeal , " , meal)
    //render the data 
    return (
        <div>
        <Container>
             <form className="search-form" onSubmit={updateSearch}> 
                <input type="text" placeholder="Enter food Item name here" onChange={onChange}/>
                <Button type="submit"  variant="outline-success" value="Search" size="sm">Search</Button>

            </form>
        </Container>
            <Container>
                <Row>
                {
                        isLoading ? <Loader /> : meal.map(data => <Meals data={data} key={data.idMeal} />)
                }
                </Row>
            </Container>
        </div>
    )
}









export default Home;