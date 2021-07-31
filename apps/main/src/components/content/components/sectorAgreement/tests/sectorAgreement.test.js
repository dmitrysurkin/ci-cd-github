/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import sectorAgreement from '../sectorAgreement.jsx';

const SectorAgreement = sectorAgreement({
    Switch: ({children, ...rest}) => <switch {...rest}>{children}</switch>,
    Route: ({children, ...rest}) => <route {...rest}>{children}</route>,
    Redirect: ({children, ...rest}) => <redirect {...rest}>{children}</redirect>,
    SectorAgreement: rest => <sectorAgreement {...rest} />,
    SectorAgreementCoordinationRegistry: rest => <sectorAgreementCoordinationRegistry {...rest} />,
    SectorAgreementCoordinatedRegistry: rest => <sectorAgreementCoordinatedRegistry {...rest} />,
    SectorAgreementRejectedRegistry: rest => <sectorAgreementRejectedRegistry {...rest} />,
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
    t.snapshot(Render.create(<SectorAgreement {...t.context.props} />).toJSON());
});