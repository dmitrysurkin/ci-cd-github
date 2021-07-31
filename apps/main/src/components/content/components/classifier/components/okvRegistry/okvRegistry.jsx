import React from 'react';

const OkvRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okv-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkvRegistry;
