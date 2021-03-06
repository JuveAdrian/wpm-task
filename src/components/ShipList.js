import React from 'react';

import { Grid } from '@material-ui/core';

import Ship from './Ship';

class ShipList extends React.Component {
    constructor(props) {
        super(props);
        this.alignItemsstate = {
            count: this.props.count
        }
    }
    
    render() {
        return (
            <Grid item container xs={10} sm={11} style={{ display: 'flex', alignItems: 'stretch' }}>
                {this.props.props.ships.map(ship => (
                    <Ship
                        props={{ ship: ship }}
                        onChangeCounter={this.props.onChangeCounter}
                        key={ship.id}
                    />
                ))}
            </Grid>            
        )
    }
}

export default ShipList;