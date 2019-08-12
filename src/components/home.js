import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './header';
import Middle from './middle';
import Footer from './footer';

class Home extends Component{
    render() {
        return (
            <>
                <HashRouter>
                    <>
                        <Switch>
                           <Route exact path='/header' component={Header} />
                           <Route exact path='/middle' component={Middle} />
                           <Route exact path='/footer' component={Footer} />
                        </Switch>
                    </>
                </HashRouter>
            </>
        );
    }
}

export default Home;