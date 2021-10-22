import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Main} from "./pages/Main/Main";
import {Profile} from "./pages/Profile/Profile";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Main/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
            </Switch>
        </Router>
    );
}
export default App;
