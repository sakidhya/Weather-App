import { useState } from "react";
import axios from "axios";
function Weather() {

        const [city,setcity]=useState(" ")

        const [weather,setweather]=useState(" ")
        const [temp,settemp]=useState(" ")
        const [desc,setdesc]=useState(" ")

        function handleCity(evt)
        {
            setcity(evt.target.value)
        }
        function getweather()
        {
            var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d03184e63a5782b70a8f03c4a287c5af`)
            weatherData.then(function(success){
                console.log(success.data)
                setweather(success.data.weather[0].main)
                setdesc(success.data.weather[0].description)
                settemp(success.data.main.temp)
            });

        }


    return (
        <div className="bg-black p-20 min-h-screen flex justify-center items-center">
            <div className="bg-green-400 p-10 rounded-md w-full max-w-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city</p>
                <input 
                    onChange={handleCity}
                    type="text" 
                    placeholder="Enter city..." 
                    className="mt-3 border border-black rounded-md p-2 w-full" 
                />
                <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-3 w-full">
                    Get Report
                </button>

                <div className="mt-4">
                    <p><b>Weather :</b>{weather}</p>
                    <p><b>Temperature :</b>{temp}</p>
                    <p><b>Description :</b>{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Weather;
