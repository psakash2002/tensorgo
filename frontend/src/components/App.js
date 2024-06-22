import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import CommunicationHistory from './CommunicationHistory';
import ComposeEmail from './ComposeEmail';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/history" component={CommunicationHistory} />
                    <Route path="/compose" component={ComposeEmail} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
