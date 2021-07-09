import React from 'react';
import ModelImage from './PlanePreview'
import planes from './planes.json';
import {useLocation} from "react-router-dom";


const PlaneList = () => {
    const route = useLocation().pathname.replaceAll("/flugzeuge/", "");

    const matches = planes
        .filter(e => e.category.startsWith(route))
        .map(x => <ModelImage src={x.category + x.img} name={x.name} cat={x.category}
                              key={x.category + x.name}/>);

    return (
        <div>
            {matches}
        </div>
    )
}


export default PlaneList;