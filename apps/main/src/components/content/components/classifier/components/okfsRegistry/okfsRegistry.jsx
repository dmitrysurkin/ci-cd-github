import React from 'react';

const OkfsRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okfs-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkfsRegistry;
