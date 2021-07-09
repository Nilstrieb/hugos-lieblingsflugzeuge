import React from 'react';
import {useLocation} from 'react-router-dom';
import planes from './planes.json';
import './plane.css';

const Planes = () => {
    const route = useLocation().pathname.replaceAll("/flugzeug/", "");

    const plane = planes.find(p => p.category + p.name === route);
    const imgPath = process.env.PUBLIC_URL + '/img/' + plane.category + plane.img;

    return (
        <div>
            {
                plane ?
                    <>
                        <h2>{plane.name}</h2>
                        <img src={imgPath} alt={'Bild von ' + plane.name} className="plane-image"/>
                        <p>{plane.description}</p>
                    </>
                    :
                    <h2>Flugzeug nicht gefunden.</h2>
            }
        </div>
    );
}


export default Planes;