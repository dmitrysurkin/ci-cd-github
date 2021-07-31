/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import layout from '../layout.jsx';

Test(`
    Верстка main не изменилась
`, t => {

    t.plan(1);

    const Layout = layout({
        Header: ({children, ...rest}) => <header {...rest}>{children}</header>,
        Sidebar: ({children, ...rest}) => <sidebar {...rest}>{children}</sidebar>
    });

    const props = {
        classes: {
            container: 'container'
        }
    };

    t.snapshot(Render.create(<Layout {...props}>children</Layout>).toJSON());
});
