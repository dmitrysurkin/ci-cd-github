import React from 'react';

const Bids = ({
    Switch,
    Route,
    Redirect,
    BidsRgMrgCoordination,
    BidsRgMrgCoordinationRegistry,
    BidsNmcExaminationClaimsRegistry,
    BidsLotsOivCoordination,
    BidsLotsOivCoordinationRegistry,
    BidsFirstLevelRegistry,
    BidsSecondLevelRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/rg-mrg-coordination/:id(new|\\d+)`}
                component={BidsRgMrgCoordination} />

            <Route
                path={`${path}/rg-mrg-coordination`}
                component={BidsRgMrgCoordinationRegistry} />

            <Route
                path={`${path}/nmc-examination-claims`}
                component={BidsNmcExaminationClaimsRegistry} />

            <Route
                path={`${path}/lots-oiv-coordination/mrgBid/:id(new|\\d+)`}
                component={BidsLotsOivCoordination} />

            <Route
                path={`${path}/lots-oiv-coordination`}
                component={BidsLotsOivCoordinationRegistry} />

            <Route
                path={`${path}/first-level`}
                component={BidsFirstLevelRegistry} />

            <Route
                path={`${path}/second-level`}
                component={BidsSecondLevelRegistry} />

            <Redirect
                from="/"
                to={`${path}/rg-mrg-coordination`} />
        </Switch>
    );
};

export default Bids;