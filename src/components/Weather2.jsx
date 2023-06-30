import React from 'react';
import {dateTime, dateTime2, imgUrl, convertWindDirection} from "../utils/setting";
import {useLocation} from 'react-router-dom';

const Weather2 = (props) => {
    const location = useLocation();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowYear = tomorrow.getFullYear();
    const tomorrowMonth = ('0' + (tomorrow.getMonth() + 1)).slice(-2);
    const tomorrowDay = ('0' + tomorrow.getDate()).slice(-2);
    const tomorrowDateString = `${tomorrowDay}-${tomorrowMonth}-${tomorrowYear}`;

    return (
        <div className={props.array ? "weather2" : "weather"}>
            {props.error ?
                <div className="weather-second"><p style={{color: '#A3FC96'}}>{props.error}</p></div> :
                <div className="weather-total">
                    {props.array ?
                    <>
                        <div className="weather-info" style={location.pathname === '/tomorrow' ? {justifyContent: 'center', color: '#EEEDDE'} : {color: '#EEEDDE'}}>
                            <>{location.pathname === '/tomorrow' ? <h2>{tomorrowDateString}</h2> : <><h2>{props.getCity}</h2> <h2>{props.getCountry}</h2></>}</>
                        </div>
                        {props.array.map((item, i)=>(
                            <div className="weather-main" key={i}>
                                <h3 className='weatherSubTitle'>{location.pathname === '/tomorrow' ? dateTime(item.dt_txt) : dateTime2(item.dt_txt)}</h3>
                                <span className='weather-span'><p>{item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)}</p>
                                <img src={imgUrl(item.weather[0].icon)} alt={item.weather[0].main} /></span>
                                <span className='weather-span'><p>Температура:</p><p>{item.main.temp}°</p></span>
                                <span className='weather-span'><p>Ощущается как:</p><p>{item.main.feels_like}°</p></span>
                                <span className='weather-span'><p>Влажность:</p><p>{item.main.humidity}%</p></span>
                                <span className='weather-span'><p>Давление:</p><p>{Math.round(item.main.pressure * 0.750062)} мм рт. ст.</p></span>
                                <span className='weather-span'><p>Ветер:</p><p>{item.wind.speed}м/с {convertWindDirection(item.wind.deg)}</p></span>
                             </div>
                        ))}
                        {location.pathname === '/tomorrow' ? <div className="weather-info"><p>{props.getCity}</p> <p>{props.getCountry}</p></div> : ''} 
                    </> : <div className="weather-second"><p style={{color: '#A3FC96', textAlign: 'center'}}>Введите название города, чтобы посмотреть прогноз погоды</p></div> }
                </div>
            }
        </div>
    )
};

export default Weather2;