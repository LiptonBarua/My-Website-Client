import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Animation = () => {
    return (
     <div>
           {/* <Router>
        <Switch>
            <Route path="/magic">
                <Doodle />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router> */}
     </div>
    );
};

export default Animation;