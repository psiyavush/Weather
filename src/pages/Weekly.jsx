import React from 'react';
import Info from '../components/Info';
import GettingWeather3 from '../components/GettingWeather3';
import {Helmet} from "react-helmet";

const Weekly = () => {
    const h1 = 'Погода в городе на 5 дней'
    const description = 'Узнайте погоду на 5 дней в вашем городе'
    return (
        <>
            <Helmet>
                <title>Прогноз Погоды в любом городе на 5 дней</title>
                <link rel="canonical" href="https://weather-alpha-umber.vercel.app/weekly" />
                <meta name="description" content="Приложение прогноза погоды в вашем  не только городе на 5 дней. Автор приложения: Пак С.Н." />
            </Helmet>
            <Info h1={h1} info={description}/>
            <GettingWeather3/>
        </>
    );
};

export default Weekly;