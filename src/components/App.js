import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Ships from '../pages/ships';



class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Ships} />
                </Switch>
            </Router>
        )
    }
}

export default App;