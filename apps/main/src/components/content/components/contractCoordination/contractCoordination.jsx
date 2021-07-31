import React from 'react';

const ContractCoordination = ({
    Switch,
    Route,
    Redirect,
    ContractCoordinationCoordinationRegistry,
    ContractCoordinationAdditionalAgreementsRegistry,
    ContractCoordinationAgreedRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/coordination`}
                component={ContractCoordinationCoordinationRegistry} />

            <Route
                path={`${path}/additionalAgreements`}
                component={ContractCoordinationAdditionalAgreementsRegistry} />

            <Route
                path={`${path}/agreed`}
                component={ContractCoordinationAgreedRegistry} />

            <Redirect
                from="/"
                to={`${path}/coordination`} />
        </Switch>
    );
};

export default ContractCoordination;