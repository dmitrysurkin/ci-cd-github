import React from 'react';

const MerCodeRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <mer-code-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default MerCodeRegistry;
