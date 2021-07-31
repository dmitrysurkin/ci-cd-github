/* eslint-disable id-length*/
import Test from 'ava';
import React from 'react';
import Render from 'react-test-renderer';
import layout from '../layout.jsx';
import style from '../style';

const Layout = layout({
    Header: ({children, ...rest}) => <header {...rest}>{children}</header>,
    Sidebar: ({children, ...rest}) => <sidebar {...rest}>{children}</sidebar>
});

Test.beforeEach(t => {
    t.context.props = {
        classes: Object.assign(...Object.keys(style).map(className => ({[className]: `${className}`}))),       
    };
});

Test(`
    Отображение лейаута не изменилось
`, t => {
    t.plan(1);
    t.snapshot(Render.create(<Layout {...t.context.props}>content</Layout>).toJSON());
});
