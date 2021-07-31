import React from 'react';

const FinanceLimitProjectRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-finance-limit-project-registry
        ref={element => element && (element.onOpen = id => window.open(`${path}/${id}`))} />
);

export default FinanceLimitProjectRegistry;
