/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import sidebar from '../sidebar.jsx';

const Sidebar = sidebar({
    Sidebar: ({children, ...rest}) => <sidebar {...rest}>{children}</sidebar>,
    Tab: ({children, ...rest}) => <tab {...rest}>{children}</tab>,
});

Test.beforeEach(t => {
    t.context.calls = [];
    t.context.props = {
        year: 2019,
        history: {
            push: value => t.context.calls.push(['historyPush', value]),
        },
        location: {
            pathname: 'locationPathname'
        }
    };
});

Test(`
    Отображение сайдбара не изменилось
`, t => {
    t.plan(1);

    t.snapshot(Render.create(<Sidebar {...t.context.props}/>).toJSON());
});

Test(`
    Скрывать вкладку при годе >= 2020
`, t => {
    t.plan(1);

    const component = Render.create(<Sidebar {...t.context.props} />);
    const main = component.root.findByProps({['data-test-id']: 'Сайдбар'});

    main.props.onSelect('value');

    t.deepEqual(t.context.calls, [
        ['historyPush', 'value'],
    ]);
});
