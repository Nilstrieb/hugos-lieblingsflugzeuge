import React, {Component} from "react";
import ModelImage from "./Plane";
import f22 from './img/f22.png'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hugos Favoriten</h1>
                <ModelImage img={f22} name="F-22 Raptor"/>
            </div>
        )
    }
}

export default Home;