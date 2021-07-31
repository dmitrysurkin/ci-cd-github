import React from 'react';

const PlanCoordinationSchedulePlan = ({
    Switch,
    Route,
    Redirect,
    PlanCoordinationSchedulePlan44fz,
    PlanCoordinationSchedulePlan223fz,
    PlanCoordinationSchedulePlanCoordinationRegistry,
    PlanCoordinationSchedulePlanCorrectionsRegistry,
    PlanCoordinationSchedulePlanCoordinatedRegistry,
}) => ({
    match: {path},
}) => (
    <Switch>
        <Route
            path={[
                `${path}/coordination/44fz/:id(new|\\d+)`,
                `${path}/corrections/44fz/:id(new|\\d+)`,
                `${path}/coordinated/44fz/:id(new|\\d+)`,
            ]}
            component={PlanCoordinationSchedulePlan44fz} />

        <Route
            path={[
                `${path}/coordination/223fz/:id(new|\\d+)`,
                `${path}/corrections/223fz/:id(new|\\d+)`,
                `${path}/coordinated/223fz/:id(new|\\d+)`,
            ]}
            component={PlanCoordinationSchedulePlan223fz} />

        <Route
            path={`${path}/coordination`}
            component={PlanCoordinationSchedulePlanCoordinationRegistry} />

        <Route
            path={`${path}/corrections`}
            component={PlanCoordinationSchedulePlanCorrectionsRegistry} />

        <Route
            path={`${path}/coordinated`}
            component={PlanCoordinationSchedulePlanCoordinatedRegistry} />

        <Redirect
            from="/"
            to={`${path}/coordination`} />
    </Switch>
);

export default PlanCoordinationSchedulePlan;