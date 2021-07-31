/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import settingsGeneral from '../settingsGeneral.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {};
    t.context.component = settingsGeneral;
});

Test(`
    Верстка обертки вебкомпонента не изменилась
`, t => {
    t.plan(1);
    const Component = t.context.component;
    t.snapshot(Render.create(<Component {...t.context.props} />).toJSON());
});