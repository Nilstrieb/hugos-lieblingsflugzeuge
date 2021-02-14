import React, {Component} from 'react';
import {
    Route, NavLink, HashRouter
} from 'react-router-dom'
import './app.css';
import PlaneList from './PlaneList';
import Home from './Home';
import UeberHugo from './UeberHugo'
import Planes from "./PlaneInfo";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div id="parent">
                    <header>
                        <Navigation/>
                        <h1>&#9992;&#65039;Hugos Lieblingsflugzeuge&#9992;&#65039;</h1>
                    </header>
                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/hugo" component={UeberHugo}/>
                        <Route path="/militaer/modern" component={PlaneList}/>
                        <Route path="/flugzeuge" component={Planes}/>
                        <Route path="/flugzeug" component={Planes}/>
                    </main>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

export default App;

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hugo">Über Hugo</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Militärflugzeuge</NavLink>
                        <div className="content">
                            <NavLink to="/">Erste Weltkrieg</NavLink>
                            <NavLink to="/">Zwischenkriegszeit</NavLink>
                            <NavLink to="/">Zweiter Weltkrieg</NavLink>
                            <NavLink to="/">Kalter Krieg</NavLink>
                            <NavLink to="/militaer/modern">Moderne</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">Airliner</NavLink>
                        <div className="content">
                            <NavLink to="/">Boeing</NavLink>
                            <NavLink to="/">Airbus</NavLink>
                            <NavLink to="/">Andere</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">Sportflugzeuge</NavLink>
                        <div className="content">
                            <NavLink to="/">Doppeldecker</NavLink>
                            <NavLink to="/">Propellerflugzeuge</NavLink>
                            <NavLink to="/">Segelflugzeuge</NavLink>
                            <NavLink to="/">Andere</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">Spezielle</NavLink>
                        <div className="content">
                            <NavLink to="/">Helikopter</NavLink>
                            <NavLink to="/">Zeppeline</NavLink>
                            <NavLink to="/">Andere</NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>&copy; Hugo</div>
            </footer>
        )
    }
}