import React from 'react';
import Info from '../components/Info';
import GettingWeather from '../components/GettingWeather';
import {Helmet} from "react-helmet";

const Today = () => {
    const h1 = 'Погода в вашем городе'
    const description = 'Узнайте погоду на сегодня в вашем городе'
    const link= '/tomorrow'
    const linkText ='На завтра'
    return (
        <>
            <Helmet>
                <title>Прогноз Погоды в любом городе на сегодня</title>
                <link rel="canonical" href="https://weather-alpha-umber.vercel.app/" />
                <meta name="description" content="Приложение прогноза погоды в вашем  не только городе на сегодня. Автор приложения: Пак С.Н." />
            </Helmet>
            <Info h1={h1} info={description} link={link} linkText={linkText}/>
            <GettingWeather/>
        </>
    );
};

export default Today;