import React, { useState, useEffect } from 'react'
import "./WeatherApp.css"

    
const WeatherApp = () => {
    const [city,setCity] = useState(null);
    const [search,setsearch] = useState("London");

     const changeInput=(event)=>{
        setsearch(event.target.value)
     }
     useEffect(()=>{
        const fetchApi=async()=>{
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d847e7a501948e8e4ca83ef91f69318a&units=metric`);
            const data=await response.json();
            // console.log(data);
            setCity(data.main);
            // console.log(data.main)
        }
        fetchApi();
     },[search])

  return (
    
    <div className='body'>

        <div className='form'>

            <input  className='input' type="search" onChange={changeInput} value={search} />          
            <h1><i className="fa-solid fa-street-view"></i>{search}</h1>
            

            {!city ? (
                <h2>Loaction not Found ...</h2>
            ):
            <>
            <div className='grad'>
                <h2>{city.temp}</h2>
                
                    <h3>min : {city.temp_min} °C | max : {city.temp_max} °C </h3>
            </div>
            </>}
            
            </div>
            
        </div>

  )
}

export default WeatherApp
