import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Info = (props) => {
    const location = useLocation();//custom hook - содержащий информацию о текущем URL
    return (
        <div className='info'>
           <h1>{props.h1}</h1>
           <p className='info-description'>{props.info}</p>
           <div className="nav">
            {/* pathname - представляет собой путь после основного домена и служит для определения активности определенной ссылки или выполнения других операций на основе текущего пути */}
            {/* Например, если текущий URL страницы - "https://example.com/about", то значение location.pathname будет "/about" */}
            {location.pathname === '/about' ? 
            <>
                <p>{<Link className='link' to='/'>На сегодня</Link>}</p>
                <p>{<Link className='link' to='/tomorrow'>На завтра</Link>}</p>
                <p>{<Link className='link' to='/weekly'>На 5 дней</Link>}</p>  
            </> : location.pathname === '/weekly' ?
            <>
                <p>{<Link className='link' to='/'>На сегодня</Link>}</p>
                <p>{<Link className='link' to='/tomorrow'>На завтра</Link>}</p>
                <p>{<Link className='link' to='/about'>Автор</Link>}</p>  
            </> :
            <>
                <p>{<Link className='link' to={props.link}>{props.linkText}</Link>}</p>
                <p>{<Link className='link' to='/weekly'>На 5 дней</Link>}</p>
                <p>{<Link className='link' to='/about'>Автор</Link>}</p>              
            </>
            }
            
           </div>
        </div>
    );
};

export default Info;