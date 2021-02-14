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
                        <Route path="/flugzeuge" component={PlaneList}/>
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
                        <NavLink to="/flugzeuge/militaer">Militärflugzeuge</NavLink>
                        <div className="content">
                            <NavLink to="/flugzeuge/militaer/erster_weltkrieg">Erste Weltkrieg</NavLink>
                            <NavLink to="/flugzeuge/militaer/zwischenkriegszeit">Zwischenkriegszeit</NavLink>
                            <NavLink to="/flugzeuge/militaer/zweiter_weltkrieg">Zweiter Weltkrieg</NavLink>
                            <NavLink to="/flugzeuge/militaer/kalter_krieg">Kalter Krieg</NavLink>
                            <NavLink to="/flugzeuge/militaer/modern">Moderne</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/flugzeuge/airliner">Airliner</NavLink>
                        <div className="content">
                            <NavLink to="/flugzeuge/airliner/boeing">Boeing</NavLink>
                            <NavLink to="/flugzeuge/airliner/airbus">Airbus</NavLink>
                            <NavLink to="/flugzeuge/airliner/andere">Andere</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/flugzeuge/sport">Sportflugzeuge</NavLink>
                        <div className="content">
                            <NavLink to="/flugzeuge/sport/doppeldecker">Doppeldecker</NavLink>
                            <NavLink to="/flugzeuge/sport/propellerflugzeuge">Propellerflugzeuge</NavLink>
                            <NavLink to="/flugzeuge/sport/segelflugzeuge">Segelflugzeuge</NavLink>
                            <NavLink to="/flugzeuge/sport/andere">Andere</NavLink>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/flugzeuge/speziell">Spezielle</NavLink>
                        <div className="content">
                            <NavLink to="/flugzeuge/spezielle/helikopter">Helikopter</NavLink>
                            <NavLink to="/flugzeuge/spezielle/zeppeline">Zeppeline</NavLink>
                            <NavLink to="/flugzeuge/spezielle/andere">Andere</NavLink>
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