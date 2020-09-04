import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Badge, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    nav: {
        backgroundColor: '#121212',
        padding: '15px 10px',
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-between'
    },
    cart: {
        color: '#ffffff'
    },
    badge: {
        marginRight: '15px',
        paddingTop: '5px'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.4em',
        color: '#ffe81f',
    }
})

class Navbar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} className={classes.nav}>
                <Typography omponent="h2" className={classes.logo}>StarWars Shop</Typography>
                <Badge badgeContent={this.props.props.count} max={999} color="primary" className={classes.badge}>
                    <ShoppingCartIcon className={classes.cart} />
                </Badge>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Navbar);