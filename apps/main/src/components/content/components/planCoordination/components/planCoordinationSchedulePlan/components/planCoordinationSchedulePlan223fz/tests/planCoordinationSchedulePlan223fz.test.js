/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import planCoordinationSchedulePlan223fz from '../planCoordinationSchedulePlan223fz.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        history: {
            push: value => t.context.calls.push(['history.push', value])
        },
        match: {
            url: '/path/223fz/id',
            params: {
                id: 'id'
            }
        }
    };
    t.context.component = planCoordinationSchedulePlan223fz({
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
    onClose работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onClose: () => t.context.calls.push(['onClose']),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onClose();
    t.deepEqual(t.context.calls, [
        ['onClose'],
    ]);
    
    t.assert(node.onClose);    
    node.onClose();

    t.deepEqual(t.context.calls, [
        ['onClose'],
        ['history.push', '/path/']
    ]);
});

Test(`
    onOpenLot работает
`, t => {
    t.plan(3);

    const node = {};
    const props = {
        ...t.context.props,
        onOpenLot: id => t.context.calls.push(['onOpenLot', id]),
    };

    const Component = t.context.component;
    const component = Render.create(<Component {...props} />, {createNodeMock: () => node});
    
    component.root.props.onOpenLot(1);
    t.deepEqual(t.context.calls, [
        ['onOpenLot', 1],
    ]);
    
    t.assert(node.onOpenLot);    
    node.onOpenLot(2);

    t.deepEqual(t.context.calls, [
        ['onOpenLot', 1],
        ['window.open', '/index.html#/schedule/lots/2']
    ]);
});
