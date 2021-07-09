import React from 'react';
import {NavLink} from 'react-router-dom'
import './plane_preview.css'


const ModelImage = props => (
    <NavLink to={'/flugzeug/' + props.cat + props.name} className="model">
        <img src={process.env.PUBLIC_URL + '/img/' + props.src} alt={props.name}/>
        <div className="model-info">
            <span className="model-info-text">{props.name}</span>
        </div>
    </NavLink>
);


export default ModelImage;