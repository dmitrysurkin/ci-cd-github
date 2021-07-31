import React from 'react';

const PurchasesMeetingsRgGrbsRegistry = ({
    match: {path},
}) => (
    <eaist-purchases-meetings-rg-grbs-registry
        ref={element => element && (element.onOpen = id => window.open(`${path}/${id}`))} />
);

export default PurchasesMeetingsRgGrbsRegistry;
