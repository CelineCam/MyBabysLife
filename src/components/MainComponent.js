import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home/>
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default Main;