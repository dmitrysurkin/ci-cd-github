/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Tab from '../tab.jsx';

Test(`
    Верстка обертки вебкомпонента Tab не изменилась
`, t => {
    t.plan(1);

    const props = {
        someProp: 'string'
    };

    t.snapshot(Render.create(<Tab {...props}>content</Tab>).toJSON());
});
