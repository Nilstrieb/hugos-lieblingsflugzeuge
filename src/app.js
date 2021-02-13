import React from 'react';
import './app.css';
import './template.css'
import Content from "./content";

class App extends React.Component {
    render() {
        return (
            <div id="parent">
                <header>
                    <Navigation/>
                    <h1>Hugos Lieblingsflugzeuge</h1>
                </header>
                <main>
                    <Content/>
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
                        <button onClick="">Start</button>
                    </li>
                    <li>
                        <button onClick="">Militärflugzeuge</button>
                        <div>
                            <button onClick="">Erste Weltkrieg</button>
                            <button onClick="">Zwischenkriegszeit</button>
                            <button onClick="">Zweiter Weltkrieg</button>
                            <button onClick="">Kalter Krieg</button>
                            <button onClick="">Moderne</button>
                        </div>
                    </li>
                    <li>
                        <button onClick="">Airliner</button>
                        <div>
                            <button onClick="">Boeing</button>
                            <button onClick="">Airbus</button>
                            <button onClick="">Andere</button>
                        </div>
                    </li>
                    <li>
                        <button onClick="">Sportflugzeuge</button>
                        <div>
                            <button onClick="">Doppeldecker</button>
                            <button onClick="">Propellerflugzeuge</button>
                            <button onClick="">Segelflugzeuge</button>
                            <button onClick="">Andere</button>
                        </div>
                    </li>
                    <li>
                        <button onClick="">Spezielle</button>
                        <div>
                            <button onClick="">Helikopter</button>
                            <button onClick="">Zeppeline</button>
                            <button onClick="">Andere</button>
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