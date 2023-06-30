import React, { useState } from 'react';
import Form from './Form';
import Weather from './Weather';

const GettingWeather = () => {
    const [temp, setTemp] = useState(undefined)
    const [town, setTown] = useState(undefined)
    const [country, setCountry] = useState(undefined)
    const [sunrise, setSunrise] = useState(undefined)
    const [sunset, setSunset] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [iconUrl, setIconUrl] = useState('')
    const [info, setInfo] = useState("")
    const [feels_like, setFeltLike] = useState(undefined)
    const [humidity, setHumidity] = useState(undefined)
    const [pressure, setPressure] = useState(undefined)
    const [speed, setSpeed] = useState(undefined)
    const [deg, setDegree] = useState(undefined)
    const [clouds, setClouds] = useState(undefined)
    const countryCode = process.env.REACT_APP_API_KEY
     
    let getWeather = async (e) =>{
      e.preventDefault();
      const city = e.target.elements.city.value;
      
      if(city){
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${countryCode}&units=metric&lang=ru`)
        const data = await api_url.json();
        if(data.weather){
            const iconCode = data.weather[0].icon;
            const timezoneOffsetSeconds = (new Date().getTimezoneOffset() * 60); // Получаем смещение временной зоны в секундах
            const sunriseDate = new Date((data.sys.sunrise + data.timezone + timezoneOffsetSeconds) * 1000);
            const sunrise_date = sunriseDate.getHours() + ':' + sunriseDate.getMinutes() + ':' + sunriseDate.getSeconds();
            const sunsetDate = new Date((data.sys.sunset + data.timezone + timezoneOffsetSeconds) * 1000);
            const sunset_date = sunsetDate.getHours() + ':' + sunsetDate.getMinutes() + ':' + sunsetDate.getSeconds();
            setIconUrl("https://openweathermap.org/img/w/" + iconCode + ".png")
            setTemp(data.main.temp)
            setTown(data.name)
            setCountry(data.sys.country)
            setSunrise(sunrise_date)
            setSunset(sunset_date)
            setError(undefined)
            setInfo(data.weather[0].description)
            setFeltLike(data.main.feels_like)
            setHumidity(data.main.humidity)
            setPressure(data.main.pressure)
            setSpeed(data.wind.speed)
            setDegree(data.wind.deg)
            setClouds(data.clouds.all)
            } else {
                setError("ОШИБКА: Введите правильное название города")
            }
      }
    }

    return (
        <div className='content'>
            <Form weather={getWeather}/>
            <Weather
                temp={temp}
                town={town}
                country={country}
                sunrise={sunrise}
                sunset={sunset}
                error={error}
                iconUrl={iconUrl}
                info={info}
                feels_like={feels_like}
                humidity={humidity}
                pressure={pressure}
                speed={speed}
                deg={deg}
                clouds={clouds}
            />
        </div>
      );
};

export default GettingWeather;