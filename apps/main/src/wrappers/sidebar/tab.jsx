import React from 'react';

const Tab = ({
    children,
    ...rest
}) => {
    return (
        <e2-sidebar-v2-tab {...rest}>
            {children}
        </e2-sidebar-v2-tab>
    );
};

export default Tab;
