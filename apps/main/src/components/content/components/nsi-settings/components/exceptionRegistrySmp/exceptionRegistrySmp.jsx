import React from 'react';

const ExceptionRegistrySmp = ({
    Switch,
    Route,
    Redirect,
    Kpgz,
    Spgz,
    Participant
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/kpgz`}
            component={Kpgz} />
        <Route
            path={`${path}/spgz`}
            component={Spgz} />
        <Route
            path={`${path}/participant`}
            component={Participant} />

        <Redirect
            from="/"
            to={`${path}/kpgz`} />
    </Switch>
);

export default ExceptionRegistrySmp;