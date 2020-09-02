import React from 'react';

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
            <div>Ships List</div>
        )
    }
}

export default Ships;