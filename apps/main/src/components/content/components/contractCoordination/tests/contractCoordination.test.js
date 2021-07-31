/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import contractCoordination from '../contractCoordination.jsx';

const ContractCoordination = contractCoordination({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    ContractCoordinationCoordinationRegistry: rest => <contractCoordinationCoordinationRegistry {...rest} />,
    ContractCoordinationAdditionalAgreementsRegistry: rest => <contractCoordinationAdditionalAgreementsRegistry {...rest} />,
    ContractCoordinationAgreedRegistry: rest => <contractCoordinationAgreedRegistry {...rest} />,
});

Test.beforeEach(t => {
    t.context.props = {
        match: {
            path: 'path'
        }
    };
});

Test(`
    Роутинг не изменился
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<ContractCoordination {...t.context.props} />).toJSON());
});