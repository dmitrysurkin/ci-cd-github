import React from 'react';

const LotCoordination = ({
    Switch,
    Route,
    Redirect,
    LotCoordinationCoordinationRegistry,
    LotCoordinationCorrectionsRegistry,
    LotCoordinationCoordinatedRegistry,
    LotCoordinationRejectedRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/coordination`}
                component={LotCoordinationCoordinationRegistry} />

            <Route
                path={`${path}/corrections`}
                component={LotCoordinationCorrectionsRegistry} />

            <Route
                path={`${path}/coordinated`}
                component={LotCoordinationCoordinatedRegistry} />

            <Route
                path={`${path}/rejected`}
                component={LotCoordinationRejectedRegistry} />

            <Redirect
                from="/"
                to={`${path}/coordination`} />
        </Switch>
    );
};

export default LotCoordination;