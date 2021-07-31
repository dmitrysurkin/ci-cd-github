import React from 'react';

const OkatoRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okato-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkatoRegistry;
