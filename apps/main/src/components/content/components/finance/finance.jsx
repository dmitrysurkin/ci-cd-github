import React from 'react';

const LotCoordination = ({
    Switch,
    Route,
    Redirect,
    FinanceLimitProject,
    FinanceLimitProjectRegistry,
}) => ({
    match: {path},
}) => {
    return (
        <Switch>
            <Route
                path={`${path}/limit-project/:id(new|\\d+)`}
                component={FinanceLimitProject} />

            <Route
                path={`${path}/limit-project`}
                component={FinanceLimitProjectRegistry} />

            <Redirect
                from="/"
                to={`${path}/limit-project`} />
        </Switch>
    );
};

export default LotCoordination;