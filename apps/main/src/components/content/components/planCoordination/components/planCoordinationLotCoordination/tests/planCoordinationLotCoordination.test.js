/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordinationLotCoordination from '../planCoordinationLotCoordination.jsx';

const PlanCoordinationLotCoordination = planCoordinationLotCoordination({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    LotCoordinationCoordinationRegistry: rest => <lotCoordinationCoordinationRegistry {...rest} />,
    LotCoordinationCorrectionsRegistry: rest => <lotCoordinationCorrectionsRegistry {...rest} />,
    LotCoordinationCoordinatedRegistry: rest => <lotCoordinationCoordinatedRegistry {...rest} />,
    LotCoordinationRejectedRegistry: rest => <lotCoordinationRejectedRegistry {...rest} />,
});

Test.beforeEach(t => {
    t.context.props = {
        match: {
            path: 'path'
        },
    };
});

Test(`
    Роутинг не изменился.
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<PlanCoordinationLotCoordination {...t.context.props} />).toJSON());
});