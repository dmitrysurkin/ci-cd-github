/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import Option from '../option.jsx';

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        classes: {
            option: 'option'
        }, 
        selected: false,
        children: 'children',
        closeOnSelect: true,
        onClick: () => t.context.calls.push(['onClick']),
        toggle: () => t.context.calls.push(['toggle']),
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Option {...t.context.props} />).toJSON());
});

Test(`
    Обрабатываются дефолтные аргументы
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        closeOnSelect: undefined,
    };

    t.snapshot(Render.create(<Option {...props} />).toJSON());
});

Test(`
    Выделен
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        selected: true,
    };

    t.snapshot(Render.create(<Option {...props} />).toJSON());
});

Test(`
    Не выделен
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        selected: false,
    };

    t.snapshot(Render.create(<Option {...props} />).toJSON());
});

Test(`
    По клику вызываются функции
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        closeOnSelect: true,
        onClick: () => t.context.calls.push(['onClick']),
        toggle: () => t.context.calls.push(['toggle']),
    };

    const component = Render.create(<Option {...props} />);
    const main = component.root.findByProps({['data-test-id']: 'Опция'});

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
        closeOnSelect: false
    };

    const component = Render.create(<Option {...props} />);
    const main = component.root.findByProps({['data-test-id']: 'Опция'});

    main.props.onClick();

    t.deepEqual(t.context.calls, []);
});