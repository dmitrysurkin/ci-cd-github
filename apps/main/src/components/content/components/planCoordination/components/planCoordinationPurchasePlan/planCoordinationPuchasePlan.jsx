import React from 'react';

const PlanCoordinationPuchasePlan = ({
    Switch,
    Route,
    Redirect,
    PlanCoordinationPurchasePlanCoordinated,
    PlanCoordinationPurchasePlanCoordinatedRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/coordinated/:id(new|\\d+)`}
                component={PlanCoordinationPurchasePlanCoordinated} />

            <Route
                path={`${path}/coordinated`}
                component={PlanCoordinationPurchasePlanCoordinatedRegistry} />

            <Redirect
                from="/"
                to={`${path}/coordinated`} />
        </Switch>
    );
};

export default PlanCoordinationPuchasePlan;