import React from 'react';
import Info from '../components/Info';
import GettingWeather2 from '../components/GettingWeather2';
import {Helmet} from "react-helmet";

const Tomorrow = () => {
    const h1 = 'Погода в городе на завтра'
    const description = 'Узнайте какая завтра погода в вашем городе'
    const link= '/'
    const linkText ='На сегодня'

    return (
        <>
            <Helmet>
                <title>Прогноз Погоды в любом городе на завтра</title>
                <link rel="canonical" href="https://weather-alpha-umber.vercel.app/tomorrow" />
                <meta name="description" content="Приложение прогноза погоды в вашем  не только городе на завтра. Автор приложения: Пак С.Н." />
            </Helmet>
            <Info h1={h1} info={description} link={link} linkText={linkText}/>
            <GettingWeather2/>
        </>
    );
};

export default Tomorrow;