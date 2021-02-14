import React, {Component} from 'react';
import ModelImage from './PlanePreview';
import planes from './planes.json'

class Home extends Component {
    constructor(props) {
        super(props);
        const favs = planes.filter(isFavPlane);
        this.state = {
            favs: favs
        }
    }

    render() {
        const favs = this.state.favs
            .map(x => <ModelImage src={x.category + x.img} name={x.name} cat={x.category}/>);

        return (
            <div>
                <h2>Hugos Favoriten</h2>
                {favs}
            </div>
        );
    }
}

function isFavPlane(plane) {
    return plane.tags.includes('fav');
}

export default Home;