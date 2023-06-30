import React, { useState } from 'react';
import Weather2 from './Weather2';
import Form from './Form';

const GettingWeather2 = () => {
  const [array, setArray] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [getCity, setGetCity] = useState(undefined);
  const [getCountry, setGetCountry] = useState(undefined);

  // Получение завтрашней даты как в запросе и преобразование ее в строку
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowYear = tomorrow.getFullYear();
  const tomorrowMonth = ('0' + (tomorrow.getMonth() + 1)).slice(-2);
  const tomorrowDay = ('0' + tomorrow.getDate()).slice(-2);
  const tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;
  const countryCode = process.env.REACT_APP_API_KEY2;

  let getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      try {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${countryCode}&units=metric&lang=ru`);
        const data = await api_url.json();
        if (data.list) {
          const filteredData = data.list.filter((item) => {
            const itemDate = item.dt_txt.split(' ')[0];
            const itemTime = item.dt_txt.split(' ')[1].split(':')[0];
            return (
              itemDate === tomorrowDateString &&
              (parseInt(itemTime) === 6 || parseInt(itemTime) === 12 || parseInt(itemTime) === 18)
            );
          });
          setGetCity(data.city.name)
          setGetCountry(data.city.country)
          setArray(filteredData);
          setError(null); // Обнуляем ошибку при успешном получении данных
        } else {
          setError("ОШИБКА: Введите правильное название города");
        }
      } catch (error) {
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

export default GettingWeather2;