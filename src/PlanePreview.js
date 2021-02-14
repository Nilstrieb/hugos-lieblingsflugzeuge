import React, {Component} from 'react';
import {
    NavLink
} from 'react-router-dom'
import './plane_preview.css'


class ModelImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
            cat: '',
        }
    }

    static getDerivedStateFromProps(props) {
        return {name: props.name, src: props.src,
            cat: (props.cat === undefined ? '' : props.cat),
        };
    }

    render() {
        const s = this.state;
        return (
            <NavLink to={'/flugzeug/' + s.cat + s.name} className="model">
                <img src={process.env.PUBLIC_URL + '/img/' + s.src} alt={this.state.name}/>
                <div className="model-info">
                    <span className="model-info-text">{s.name}</span>
                </div>
            </NavLink>
        );
    }
}

export default ModelImage;