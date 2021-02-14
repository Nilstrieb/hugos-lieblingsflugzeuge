import React, {Component} from 'react';
import ModelImage from './PlanePreview'
import planes from './planes.json';


class PlaneList extends Component {
    render() {
        const loc = this.props.location.pathname;
        const cat = loc.replaceAll('/flugzeuge/', '') + '/';

        let matches = [];

        for (const e of planes) {
            if (e.category.startsWith(cat)) {
                matches.push(e);
            }
        }

        matches = matches.map(x => <ModelImage src={x.category + x.img} name={x.name} cat={x.category} key={x.category + x.name}/>);


        return (
            <div>
                {matches}
            </div>
        )
    }
}

export default PlaneList;