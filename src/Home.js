import React, {Component} from 'react';
import ModelImage from './Plane';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hugos Favoriten</h1>
                <ModelImage src="f22.png" name="F-22 Raptor"/>
            </div>
        );
    }
}

export default Home;