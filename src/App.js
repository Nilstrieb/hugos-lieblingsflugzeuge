import React from 'react';
import f22 from './img/raptor-1040097_1920.png'
import harrier from './img/av-8b-harrier-1986422_1920.jpg'
import './app.css';
import './header.css'

class App extends React.Component {
    render() {
        const items = Array(100).fill(1).map((x, y) => x + y)
            .map(x => <ModelImage img={f22} name={'F' + (20 + x) + ' Raptor'}/>);

        return (
            <div id="parent">
                <header>
                    <h1>Hugos Lieblingsflugzeuge</h1>
                    <Navigation/>
                </header>
                <main>
                    <div>
                        {items}
                        <ModelImage img={harrier} name="AV-8B Harrier"/>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href=""><button>Seite A</button></a>
                    </li>
                    <li>
                        <a href=""><button>Seite B</button></a>
                        <div className="content">
                            <a href="">Seite BA</a>
                            <a href="">Seite BB</a>
                            <a href="">Seite BC</a>
                        </div>
                    </li>
                    <li>
                        <a href=""><button>Seite C</button></a>
                        <div className="content">
                            <a href="">Seite CA</a>
                            <a href="">Seite CB</a>
                        </div>
                    </li>
                    <li>
                        <a href=""><button>Seite D</button></a>
                        <div className="content">
                            <a href="">Seite DA</a>
                            <a href="">Seite DB</a>
                            <a href="">Seite DC</a>
                            <a href="">Seite DD</a>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>hi</div>
            </footer>
        )
    }
}


class ModelImage extends React.Component {
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
        return (
            <div className="model">
                <img src={this.state.img} alt={this.state.name}/>
                <div>{this.state.name}</div>
            </div>
        );
    }
}