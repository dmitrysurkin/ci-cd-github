/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Header from '../header.jsx';

Test(`
    Верстка обертки вебкомпонента хэдера не изменилась
`, t => {
    t.plan(1);

    const props = {
        someProp: 'string'
    };

    t.snapshot(Render.create(<Header {...props}>content</Header>).toJSON());
});
