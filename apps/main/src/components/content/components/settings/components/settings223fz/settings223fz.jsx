import React from 'react';

const Settings223fz = ({
    Switch,
    Route,
    Redirect,
    Settings223fzAgreement,
    Settings223fzCentralizationRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/agreement`}
                component={Settings223fzAgreement} />

            <Route
                path={`${path}/centralization`}
                component={Settings223fzCentralizationRegistry} />

            <Redirect
                from="/"
                to={`${path}/agreement`} />
        </Switch>
    );
};

export default Settings223fz;