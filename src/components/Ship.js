import React from 'react';

class Ship extends React.Component {
    state = {
        name: this.props.props.ship.name,
        manufacturers: [this.props.props.ship.manufacturers],
        cost: this.props.props.ship.costInCredits
    }
    render() {
        return (
            <div>
                {this.state.name}
                <br />
                {this.state.manufacturers.map( item => (
                    item
                ))}
                <br />
                {this.state.cost}
                <p>-------------------------------------</p>
            </div>
        )
    }
}

export default Ship;