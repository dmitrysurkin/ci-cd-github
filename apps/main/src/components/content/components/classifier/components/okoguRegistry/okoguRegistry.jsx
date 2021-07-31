import React from 'react';

const OkoguRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okogu-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkoguRegistry;
