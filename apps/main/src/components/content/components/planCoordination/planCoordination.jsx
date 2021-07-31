import React from 'react';

const PlanCoordination = ({
    Switch,
    Route,
    Redirect,
    PlanCoordinationPurchasePlan,
    PlanCoordinationSchedulePlan,
    PlanCoordinationLotCoordination
}) => ({
    year,
    match: {path},
}) => (
    <Switch>
        <Route
            path={`${path}/schedule-plan`}
            component={PlanCoordinationSchedulePlan} />

        {year < 2020 && (
            <Route
                path={`${path}/purchase-plan`}
                component={PlanCoordinationPurchasePlan} />
        )}

        <Route
            path={`${path}/lot-coordination`}
            component={PlanCoordinationLotCoordination} />

        {year >= 2020 && (
            <Redirect
                from={`${path}/purchase-plan`}
                to={`${path}/schedule-plan`} />
        )}        

        <Redirect
            from="/"
            to={`${path}/purchase-plan`} />
    </Switch>
);

export default PlanCoordination;