/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordinationSchedulePlan from '../planCoordinationSchedulePlan.jsx';

const PlanCoordinationSchedulePlan = planCoordinationSchedulePlan({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    PlanCoordinationSchedulePlan44fz: rest => <planCoordinationSchedulePlan44fz {...rest} />,
    PlanCoordinationSchedulePlan223fz: rest => <planCoordinationSchedulePlan223fz {...rest} />,
    PlanCoordinationSchedulePlanCoordinationRegistry: rest => <planCoordinationSchedulePlanCoordinationRegistry {...rest} />,
    PlanCoordinationSchedulePlanCorrectionsRegistry: rest => <planCoordinationSchedulePlanCorrectionsRegistry {...rest} />,
    PlanCoordinationSchedulePlanCoordinatedRegistry: rest => <planCoordinationSchedulePlanCoordinatedRegistry {...rest} />,
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
    t.snapshot(Render.create(<PlanCoordinationSchedulePlan {...t.context.props} />).toJSON());
});