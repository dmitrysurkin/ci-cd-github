import React from 'react';

const SectorAgreement = ({
    Switch,
    Route,
    Redirect,
    SectorAgreement,
    SectorAgreementRegistry
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={[
                    `${path}/mrgBid/:id(new|\\d+)`
                ]}
                component={SectorAgreement} />

            <Route
                path={`${path}`}
                component={SectorAgreementRegistry} />

            <Redirect
                from="/"
                to={`${path}`} />
        </Switch>
    );
};

export default SectorAgreement;