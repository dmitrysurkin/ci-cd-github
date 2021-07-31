import React from 'react';

export default function Title({
    children,
    ...rest
}) {
    return (
        <e2-header {...rest}>
            {children}
        </e2-header>
    );
}
