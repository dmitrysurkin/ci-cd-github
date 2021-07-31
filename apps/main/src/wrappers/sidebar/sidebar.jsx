import React from 'react';

export default function Sidebar({
    children,
    onSelect,
    ...rest
}) {
    return (
        <e2-sidebar-v2
            {...rest}
            ref={element => element && (element.onSelect = onSelect)}>
            {children}
        </e2-sidebar-v2>
    );
}
