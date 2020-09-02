import React from 'react';

import ShipList from '../components/ShipList';

class Ships extends React.Component {
    state = {
        ships: []
    }

    componentDidMount() {
        fetch('https://swapi.apis.guru/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
                    query {
                        allStarships {
                        starships {
                            name
                            manufacturers
                            costInCredits
                        }
                        }
                    }
                `
            })
        })
        .then(res => res.json())
        .then(data => {
            this.setState({ ships : data.data.allStarships.starships });
        });
    }

    render () {
        console.log(this.state.ships);
        return (
            <ShipList props={{ ships: this.state.ships }} />
        )
    }
}

export default Ships;