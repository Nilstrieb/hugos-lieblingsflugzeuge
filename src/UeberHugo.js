import React, {Component} from 'react';

class UeberHugo extends Component {
    render() {
        return (
            <div>
                <h1>Hugo Boss</h1>
                <p>Hugo Boss ist ein begeisterter Modellbauer und Gründungsmitglied
                vom Modellbauverein Winterthur.</p>
                <p>Am liebsten baut er Flugzeuge, sie haben ihn schon sein ganzes Leben fasziniert und er wollte immer Pilot werden.
                Das hat er zwar nicht geschafft, aber das Modellbauen ermöglicht es ihm, seine Leidenschaft trotzdem auszuleben.
                Auf dieser Website präsentiert Hugo seine liebsten Flugzeuge, die er am liebsten alle nachbauen würde.</p>
                <img src={process.env.PUBLIC_URL + '/img/hugo.jpg'} alt="Hugo Boss"/>
            </div>
        )
    }
}

export default UeberHugo;