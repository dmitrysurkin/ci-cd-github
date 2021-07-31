/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import button from '../button.jsx';

const Button = button();

Test.beforeEach(t => {
    t.context.props = {
        classes: {
            button: 'button'
        }, 
        disabled: false,
        children: 'children',
        hide: false,
        usePending: true,
        title: 'title',
    };
});

Test(`
    Вёрстка не изменилась
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        hide: false,
    };

    t.snapshot(Render.create(<Button {...props} />).toJSON());
});

Test(`
    Не отображать компонент
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        hide: true,
    };

    t.snapshot(Render.create(<Button {...props} />).toJSON());
});

Test(`
    Обрабатывается дефолтные аргументы
`, t => {
    t.plan(1);

    const props = {
        ...t.context.props,
        disabled: undefined,
        usePending: undefined
    };
    t.snapshot(Render.create(<Button {...props} />).toJSON());
});