import React from 'react';
import Info from '../components/Info';
import '../utils/font-awesome.min.css';

const About = () => {
    const h1 = 'Автор проекта'
    const description = 'Информация обо мне в соц.сетях'
    return (
        <>
            <Info h1={h1} info={description}/>
            <div className="weather">
                <div className="weather-total" style={{height: '400px'}}>
                    <div className="app__body">
                        <a target="_blank" rel="noreferrer" href="https://vk.com/pak_s" className="app__btn">
                        <i className="fa fa-vk" aria-hidden="true"></i>
                        <div className="app__btn-text">Vkontakte</div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/seva_krot/" className="app__btn">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <div className="app__btn-text">Instagram</div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/park.siyavush/" className="app__btn">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <div className="app__btn-text">Facebook</div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://t.me/Semen12345" className="app__btn">
                        <i className="fa fa-telegram" aria-hidden="true"></i>
                        <div className="app__btn-text">Telegram</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;