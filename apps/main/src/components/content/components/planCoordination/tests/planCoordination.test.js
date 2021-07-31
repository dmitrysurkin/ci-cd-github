/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordination from '../planCoordination.jsx';

const PlanCoordination = planCoordination({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    PlanCoordinationPurchasePlan: rest => <planCoordinationPurchasePlan {...rest} />,
    PlanCoordinationSchedulePlan: rest => <planCoordinationSchedulePlan {...rest} />,
    PlanCoordinationLotCoordination: rest => <planCoordinationLotCoordination {...rest} />,
});

Test.beforeEach(t => {
    t.context.props = {
        match: {
            path: 'path'
        },
        year: 2019,
    };
});

Test(`
    Роутинг не изменился.
    Отображается компонент "Планы-закупки"
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<PlanCoordination {...t.context.props} />).toJSON());
});

Test(`
    Не отображается компонент "Планы-закупки", происходит редирект
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        year: 2020
    };

    t.snapshot(Render.create(<PlanCoordination {...props}/>).toJSON());
});