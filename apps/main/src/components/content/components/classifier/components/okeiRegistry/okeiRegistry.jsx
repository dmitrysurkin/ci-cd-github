import React from 'react';

const OkeiRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okei-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkeiRegistry;
