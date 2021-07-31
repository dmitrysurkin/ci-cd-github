import React from 'react';

const OksmRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-oksm-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OksmRegistry;
