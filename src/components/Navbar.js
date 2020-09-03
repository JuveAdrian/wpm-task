import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Navbar</h1>
                <p>Koszyk: {this.props.props.count}</p>
            </div>

        )
    }
}

export default Navbar;