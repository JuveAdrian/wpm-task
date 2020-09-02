import React from 'react';

import Ship from './Ship';

class ShipList extends React.Component {
    render() {
        return (
            <div>
                <h1>List:</h1>
                {this.props.props.ships.map(ship => (
                    <Ship props={{ ship: ship }} />
                ))}
            </div>
            
        )
    }
}

export default ShipList;