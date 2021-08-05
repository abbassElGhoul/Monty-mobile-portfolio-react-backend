import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

export default class PrivateRoute extends Component {
    constructor(props) {
        super(props);
    }

    _checkIfAuthenticated(component, path, isExact) {
        const appData = JSON.parse(localStorage.getItem("user"));
        if(null !== appData) {
            const token = appData.token;
            if(token.length > 21) {
                return(
                    <Route component={component} path={path} exact={isExact?true:false} />
                )
            }
        }
        return (
            <Redirect to="/home"/>
        );
    }

    render() {
        const { component, path, isExact } = this.props;
        return this._checkIfAuthenticated(component, path, isExact);
    }
}