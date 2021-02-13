import React, {Component} from 'react';
import {
    Route, NavLink, HashRouter
} from 'react-router-dom'
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
            <NavLink to={'/flugzeug/' + this.state.name} className="model">
                <img src={process.env.PUBLIC_URL + '/img/' + this.state.src} alt={this.state.name}/>
                <div className="model-info">
                    <span className="model-info-text">{this.state.name}</span>
                </div>
            </NavLink>
        );
    }
}

export default ModelImage;