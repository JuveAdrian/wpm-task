import React from 'react';

import { Grid, Box, Card, CardContent, CardActions, Typography, Button, FormControl, OutlinedInput, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const useStyles = () => ({
    box: {
        backgroundColor: '#282c34',
        margin: '10px 10px',
        color: '#fff',
        jusifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.1em',
        color: '#ffe81f'
    },
    manufac: {
        fontSize: '0.7em',
        height: '3em',
        color: '#fff'
    },
    inputQuantity: {
        width: '100%',
        color: '#fff',
        borderColor: '#fff'
    },
    btn: {
        backgroundColor: '#ff9100',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '0.9em',
        padding: '12px'
    }
})

class Ship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.props.ship.name,
            manufacturers: [this.props.props.ship.manufacturers],
            cost: this.props.props.ship.costInCredits,
            cartCounter: 1,
            count: this.props.count
        }
    } 

    addToCart = () => {
       this.props.onChangeCounter(this.state.cartCounter);
       document.getElementById(this.state.name).value = " ";
    }

    inuptValue = (e) => {
        this.setState({cartCounter: e.target.value})
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
                <Card className={classes.box} >
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
                            {this.state.cost === null ? 'Inaccessible' :  `₹${this.state.cost}` }
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Quantity</InputLabel>
                        <OutlinedInput 
                            value={this.state.cartCounter} 
                            onChange={this.inuptValue} 
                            id={this.state.name} 
                            className={classes.inputQuantity}
                            label="Quantity"
                            disabled={this.state.cost === null ? true : false}
                        />
                    </FormControl>
                        
                        <Button 
                            onClick={this.addToCart}
                            className={classes.btn}
                            disabled={this.state.cost === null ? true : false}
                        >
                            Add
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Ship);