import React, {Component} from 'react';
import planes from './planes.json'

class Planes extends Component {
    render() {
        const loc = this.props.location.pathname;
        const planeName = loc.replaceAll('/flugzeug/', '');
        let plane;
        for (const e of planes) {
            if (e.category + e.name === planeName) {
                plane = e;
                break;
            }
        }

        let content;
        if (plane === undefined) {
            content =
                <div>
                    <h2>Flugzeug nicht gefunden.</h2>
                </div>
            ;
        } else {
            const imgPath = process.env.PUBLIC_URL + '/img/' + plane.category + plane.img;
            content =
                <div>
                    <h2>{plane.name}</h2>
                    <img src={imgPath} alt={'Bild von ' + plane.name}/>
                    <p>{plane.description}</p>
                </div>
            ;
        }

        return (
            content
        );
    }
}

export default Planes;