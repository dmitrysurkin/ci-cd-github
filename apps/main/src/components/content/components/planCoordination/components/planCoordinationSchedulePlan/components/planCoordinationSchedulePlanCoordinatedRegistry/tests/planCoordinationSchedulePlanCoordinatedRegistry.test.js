/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordinationSchedulePlanCoordinatedRegistry from '../planCoordinationSchedulePlanCoordinatedRegistry.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        match: {
            path: '/path'
        }
    };
    t.context.component = planCoordinationSchedulePlanCoordinatedRegistry({
        window: {
            open: value => t.context.calls.push(['window.open', value])
        }
    });
});

Test(`
    Верстка обертки вебкомпонента не изменилась
`, t => {
    t.plan(1);
    const Component = t.context.component;
    t.snapshot(Render.create(<Component {...t.context.props} />).toJSON());
});

Test(`
    onOpen44fz работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpen44fz: id => t.context.calls.push(['onOpen44fz', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpen44fz(1);
    t.deepEqual(t.context.calls, [
        ['onOpen44fz', 1],
    ]);
    
    t.assert(node.onOpen44fz);    
    node.onOpen44fz(2);

    t.deepEqual(t.context.calls, [
        ['onOpen44fz', 1],
        ['window.open', '/path/44fz/2']
    ]);
});

Test(`
    onOpen223fz работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpen223fz: id => t.context.calls.push(['onOpen223fz', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpen223fz(1);
    t.deepEqual(t.context.calls, [
        ['onOpen223fz', 1],
    ]);
    
    t.assert(node.onOpen223fz);    
    node.onOpen223fz(2);

    t.deepEqual(t.context.calls, [
        ['onOpen223fz', 1],
        ['window.open', '/path/223fz/2']
    ]);
});