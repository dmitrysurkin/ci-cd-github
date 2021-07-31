/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import bids from '../bids.jsx';

const Bids = bids({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    BidsRgMrgCoordination: rest => <bidsRgMrgCoordination {...rest} />,
    BidsRgMrgCoordinationRegistry: rest => <bidsRgMrgCoordinationRegistry {...rest} />,
    BidsNmcExaminationClaimsRegistry: rest => <bidsNmcExaminationClaimsRegistry {...rest} />,
    BidsLotsOivCoordination: rest => <bidsLotsOivCoordination {...rest} />,
    BidsLotsOivCoordinationRegistry: rest => <bidsLotsOivCoordinationRegistry {...rest} />,
    BidsFirstLevelRegistry: rest => <bidsFirstLevelRegistry {...rest} />,
    BidsSecondLevelRegistry: rest => <bidsSecondLevelRegistry {...rest} />,
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
    t.snapshot(Render.create(<Bids {...t.context.props} />).toJSON());
});