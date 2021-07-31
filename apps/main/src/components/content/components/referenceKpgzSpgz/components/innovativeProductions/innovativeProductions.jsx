import React from 'react';

const InnovativeProductions = ({
    Switch,
    Route,
    Redirect,
    InnovativeSpgzRegistry,
    InnovativeGroupRegistry,
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/search/`}
            component={InnovativeSpgzRegistry} />

        <Route
            path={`${path}/groups/`}
            component={InnovativeGroupRegistry} />

        <Redirect
            from="/"
            to={`${path}/groups/`} />
    </Switch>
);

export default InnovativeProductions;