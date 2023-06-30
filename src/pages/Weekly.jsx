import React from 'react';
import Info from '../components/Info';
import GettingWeather3 from '../components/GettingWeather3';

const Weekly = () => {
    const h1 = 'Погода в городе на 5 дней'
    const description = 'Узнайте погоду на 5 дней в вашем городе'
    return (
        <>
            <Info h1={h1} info={description}/>
            <GettingWeather3/>
        </>
    );
};

export default Weekly;