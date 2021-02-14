import React from 'react';
import ModelImage from './Plane'


class Modern extends React.Component {
    render() {
        const items = Array(100).fill(1).map((x, y) => x + y)
            .map(x => <ModelImage src="military/modern/f22.png" name={'F' + (20 + x) + ' Raptor'}/>);

        return (
            <div>
                {items}
                <ModelImage src="harrier.jpg" name="AV-8B Harrier"/>
            </div>
        )
    }
}

export default Modern;