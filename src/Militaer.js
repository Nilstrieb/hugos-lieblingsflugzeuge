import React from 'react';
import ModelImage from './Plane'
import f22 from './img/raptor-1040097_1920.png'
import harrier from './img/av-8b-harrier-1986422_1920.jpg'

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