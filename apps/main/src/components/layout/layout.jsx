import React from 'react';

const Layout = ({
    Header,
    Sidebar,
}) => ({
    classes,
    children
}) => (
    <div className={classes.container}>
        <div className={classes.content}>
            {children}
        </div>
        <div className={classes.header}>
            <Header />
        </div>
        <div className={classes.sidebar}>
            <Sidebar />
        </div>
    </div>
);

export default Layout;
