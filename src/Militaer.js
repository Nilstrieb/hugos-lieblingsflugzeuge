import React from 'react';
import ModelImage from './Plane'
import f22 from './img/f22.png'
import harrier from './img/harrier.jpg'

class Modern extends React.Component {
    render() {
        const items = Array(100).fill(1).map((x, y) => x + y)
            .map(x => <ModelImage img={f22} name={'F' + (20 + x) + ' Raptor'}/>);

        return (
            <div>
                {items}
                <ModelImage img={harrier} name="AV-8B Harrier"/>
            </div>
        )
    }
}

export default Modern;