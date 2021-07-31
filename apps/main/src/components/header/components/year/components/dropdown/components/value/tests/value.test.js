/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Value from '../value.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            value: 'value'
        }, 
        isOpen: false,
        children: 'children',
        onClick: () => t.context.calls.push(['onClick']),
        toggle: () => t.context.calls.push(['toggle']),
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Value {...t.context.props} />).toJSON());
});

Test(`
    Открыт
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        selected: true,
    };

    t.snapshot(Render.create(<Value {...props} />).toJSON());
});

Test(`
    Закрыт
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        selected: false,
    };

    t.snapshot(Render.create(<Value {...props} />).toJSON());
});

Test(`
    children функция
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        children: () => {},
    };

    t.snapshot(Render.create(<Value {...props} />).toJSON());
});

Test(`
    children не функция
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        children: null,
    };

    t.snapshot(Render.create(<Value {...props} />).toJSON());
});

Test(`
    По клику вызываются функции
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        onClick: () => t.context.calls.push(['onClick']),
        toggle: () => t.context.calls.push(['toggle']),
    };

    const component = Render.create(<Value {...props} />);
    const main = component.root.findByProps({['data-test-id']: 'Значение'});

    main.props.onClick();

    t.deepEqual(t.context.calls, [
        ['onClick'],
        ['toggle'],
    ]);
});

Test(`
    По клику не вызываются функции
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        onClick: undefined,
        toggle: undefined,
    };

    const component = Render.create(<Value {...props} />);
    const main = component.root.findByProps({['data-test-id']: 'Значение'});

    main.props.onClick();

    t.deepEqual(t.context.calls, []);
});