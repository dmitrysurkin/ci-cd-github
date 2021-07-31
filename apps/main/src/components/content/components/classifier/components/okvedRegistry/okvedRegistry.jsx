import React from 'react';

const OkvedRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okved-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkvedRegistry;
