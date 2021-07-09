import React from 'react';
import ModelImage from './PlanePreview';
import planes from './planes.json'

const Home = () => {
    const favs = planes.filter(isFavPlane)
        .map(p => <ModelImage src={p.category + p.img} name={p.name} cat={p.category} key={p.category + p.name}/>);

    const all = planes
        .map(x => <ModelImage src={x.category + x.img} name={x.name} cat={x.category} key={x.category + x.name}/>);

    return (
        <div>
            <h2>Hugos Favoriten</h2>
            {favs}
            <h2>Alle Flugzeuge</h2>
            {all}
        </div>
    );

}

function isFavPlane(plane) {
    return plane.tags.includes('fav');
}

export default Home;