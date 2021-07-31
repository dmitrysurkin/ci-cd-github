/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import content from '../content.jsx';

const Content = content({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    Loader: ({children, ...rest}) => <loader {...rest}>{children}</loader>,
    Finance: ({children, ...rest}) => <finance {...rest}>{children}</finance>,
    PlanCoordination: ({children, ...rest}) => <planCoordination {...rest}>{children}</planCoordination>,
    LotCoordination: ({children, ...rest}) => <lotCoordination {...rest}>{children}</lotCoordination>,
    Purchases: ({children, ...rest}) => <purchases {...rest}>{children}</purchases>,
    SectorAgreement: ({children, ...rest}) => <sectorAgreement {...rest}>{children}</sectorAgreement>,
    ContractCoordination: ({children, ...rest}) => <contractCoordination {...rest}>{children}</contractCoordination>,
    Bids: ({children, ...rest}) => <bids {...rest}>{children}</bids>,
    Settings: ({children, ...rest}) => <settings {...rest}>{children}</settings>,
});

Test.beforeEach(t => {
    t.context.props = {
        isLoading: false
    };
});

Test(`
    Верхнеуровневый роутинг не изменился
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Content />).toJSON());
});

Test(`
    Отображать загрузчик
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        isLoading: false
    };

    t.snapshot(Render.create(<Content {...props} />).toJSON());
});