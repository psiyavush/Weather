import React from 'react';
import Info from '../components/Info';
import GettingWeather2 from '../components/GettingWeather2';

const Tomorrow = () => {
    const h1 = 'Погода в городе на завтра'
    const description = 'Узнайте какая завтра погода в вашем городе'
    const link= '/'
    const linkText ='На сегодня'

    return (
        <>
            <Info h1={h1} info={description} link={link} linkText={linkText}/>
            <GettingWeather2/>
        </>
    );
};

export default Tomorrow;