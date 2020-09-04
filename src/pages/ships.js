import React from 'react';

import { Grid } from '@material-ui/core';

import ShipList from '../components/ShipList';
import Navbar from '../components/Navbar';

class Ships extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            count: 0
        }
    }

    handleCounterChange(addInt) {
        this.setState({ count: this.state.count + parseInt(addInt) })
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
                            id
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
        return (
            <Grid container style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#21252b' }}>
                <Navbar props={{ count: this.state.count }} />
                <ShipList 
                    props={{ ships: this.state.ships }} 
                    onChangeCounter={this.handleCounterChange.bind(this)}
                />
            </Grid>
        )
    }
}

export default Ships;