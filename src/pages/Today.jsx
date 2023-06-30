import React from 'react';
import Info from '../components/Info';
import GettingWeather from '../components/GettingWeather';

const Today = () => {
    const h1 = 'Погода в вашем городе'
    const description = 'Узнайте погоду на сегодня в вашем городе'
    const link= '/tomorrow'
    const linkText ='На завтра'
    return (
        <>
            <Info h1={h1} info={description} link={link} linkText={linkText}/>
            <GettingWeather/>
        </>
    );
};

export default Today;