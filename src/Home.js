import React, {Component} from "react";
import ModelImage from "./Plane";
import f22 from './img/raptor-1040097_1920.png'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hugos Favoriten</h1>
                <ul>
                    <li><ModelImage img={f22} name="F-22 Raptor"/></li>
                </ul>
            </div>
        )
    }
}

export default Home;