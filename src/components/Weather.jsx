import React from 'react';
import {convertWindDirection} from "../utils/setting";

const Weather = (props) => {
        
    return (
        <div className='weather'>
            {props.error ?
                <div className="weather-second"><p style={{color: '#A3FC96'}}>{props.error}</p></div> :
                <div className="weather-total">
                    {props.info ?
                    <>
                        <div className="weather-info">
                            <p>{props.info.charAt(0).toUpperCase() + props.info.slice(1)}</p>{/* Преобразовываю строку так, чтобы первая буква была заглавной */}
                            <img src={props.iconUrl} alt={props.town} />
                        </div>
                        <div className="weather-main">
                            <span className='weather-span'><p>Температура:</p><p>{props.temp}°</p></span>
                            <span className='weather-span'><p>Ощущается как:</p><p>{props.feels_like}°</p></span>
                            <span className='weather-span'><p>Влажность:</p><p>{props.humidity}%</p></span>
                            <span className='weather-span'><p>Давление:</p><p>{Math.round(props.pressure * 0.750062)} мм рт. ст.</p></span>{/*Перевод давления из (hPa) в (мм рт. ст.)*/}
                            <span className='weather-span'><p>Ветер:</p><p>{props.speed}м/с {convertWindDirection(props.deg)}</p></span>{/*вспомогательная ф-ция, для определения направления ветра*/}
                        </div>
                        <div className="weather-second">
                            <span className='weather-span'><p>Местоположение:</p><p>{props.town}, {props.country}</p></span>
                            <span className='weather-span'><p>Облачность:</p><p>{props.clouds}%</p></span>
                            <span className='weather-span'><p>Восход солнца:</p><p>{props.sunrise}</p></span>
                            <span className='weather-span'><p>Заход солнца:</p><p>{props.sunset}</p></span>
                        </div>
                    </> : <div className="weather-second"><p style={{color: '#A3FC96', textAlign: 'center'}}>Введите название города, чтобы посмотреть прогноз погоды</p></div> }
                </div>
            }
        </div>
    );
};

export default Weather;