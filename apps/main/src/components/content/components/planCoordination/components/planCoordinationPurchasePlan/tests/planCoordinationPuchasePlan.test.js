/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordinationPuchasePlan from '../planCoordinationPuchasePlan.jsx';

const PlanCoordinationPuchasePlan = planCoordinationPuchasePlan({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    PlanCoordinationPurchasePlanCoordinated: rest => <planCoordinationPurchasePlanCoordinated {...rest} />,
    PlanCoordinationPurchasePlanCoordinatedRegistry: rest => <planCoordinationPurchasePlanCoordinatedRegistry {...rest} />,
});

Test.beforeEach(t => {
    t.context.props = {
        match: {
            path: 'path'
        },
    };
});

Test(`
    Роутинг не изменился
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<PlanCoordinationPuchasePlan {...t.context.props} />).toJSON());
});