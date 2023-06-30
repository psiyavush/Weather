import React, { useState } from 'react';
import Form from './Form';
import Weather2 from './Weather2';

const GettingWeather3 = () => {
    const [array, setArray] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [getCity, setGetCity] = useState(undefined);
    const [getCountry, setGetCountry] = useState(undefined);
    const today = new Date(); // Получаем текущую дату
    const countryCode = process.env.REACT_APP_API_KEY2;

    let getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city){
            try{
                const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${countryCode}&units=metric&lang=ru`);
                const data = await api_url.json();
                if (data.list){
                    const filteredData = data.list.filter((item) => {
                        const itemDate = item.dt_txt.split(' ')[0]; // Получаем дату из строки записи прогноза погоды
                        const itemTime = item.dt_txt.split(' ')[1].split(':')[0]; // Получаем время из строки записи прогноза погоды
                        const daysDifference = Math.ceil((new Date(itemDate) - today) / (1000 * 60 * 60 * 24)); // Разница в днях между прогнозом и сегодняшней датой, округленная в меньшую сторону
                        return daysDifference >= 0 && daysDifference <= 4 && itemTime === '12'; // Возвращаем true, если прогноз находится в пределах следующих 4 дней и имеет время 12:00
                    });
                    setGetCity(data.city.name)
                    setGetCountry(data.city.country)
                    setArray(filteredData);
                    setError(null); // Обнуляем ошибку при успешном получении данных
                } else {
                    setError("ОШИБКА: Введите правильное название города");
                  }
            }  catch (error) {
                console.log(error);
                setError("ОШИБКА: Произошла ошибка при получении данных о погоде");
                setArray(null);
                setGetCity(null)
                setGetCountry(null)
              }
        }
        };


    return (
        <div className='content'>
            <Form weather={getWeather} />
            <Weather2 array={array} error={error} getCity={getCity} getCountry={getCountry}/>
        </div>
    );
};

export default GettingWeather3;