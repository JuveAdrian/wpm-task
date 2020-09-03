import React from 'react';

import { Grid, Box, Card, CardContent, CardActions, Typography, Button, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    box: {
        backgroundColor: '#dedede',
        margin: '10px 10px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1em'
    },
    manufac: {
        fontSize: '0.7em'
    }
})

class Ship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.props.ship.name,
            manufacturers: [this.props.props.ship.manufacturers],
            cost: this.props.props.ship.costInCredits,
            cartCounter: 0,
            count: this.props.count
        }
    } 
    addToCart = () => {
        this.setState({cartCounter: this.state.cartCounter + 1})
        console.log(this.state.cartCounter);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4} xl={3} >
                <Card className={classes.box}>
                    <CardContent>
                        <Typography component="h2" className={classes.title}>
                            {this.state.name}
                        </Typography>
                        <Box>
                            {this.state.manufacturers.map( (item) => (
                                <Typography component="p" className={classes.manufac}>{item + ' \n'}</Typography>
                            ))}
                        </Box>
                        <Typography component="p">
                            {this.state.cost === null ? 'Inaccessible' : this.state.cost }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Input defaultValue="1" />
                        <Button onClick={this.props.onChangeCounter}>Add to Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Ship);