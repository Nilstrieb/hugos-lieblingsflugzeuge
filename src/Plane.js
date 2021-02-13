import React, {Component} from "react";
import './Plane.css'


class ModelImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
        }
    }

    static getDerivedStateFromProps(props) {
        return {img: props.img, name: props.name};
    }

    render() {
        //const style = {backgroundImage: `url('/img/${this.state.img}')`};
        return (
            <a href="" className="model">
                <img src={this.state.img} alt={this.state.name}/>
                <div className="model-info">
                    <span className="model-info-text">{this.state.name}</span>
                </div>
            </a>
        );
    }
}

export default ModelImage;