import React, {Component} from "react";
import './Plane.css'


class ModelImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
        }
    }

    static getDerivedStateFromProps(props) {
        return {name: props.name, src: props.src};
    }

    render() {
        return (
            <a href="" className="model">
                <img src={process.env.PUBLIC_URL + '/img/' + this.state.src} alt={this.state.name}/>
                <div className="model-info">
                    <span className="model-info-text">{this.state.name}</span>
                </div>
            </a>
        );
    }
}

export default ModelImage;