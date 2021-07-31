import React from 'react';

const OkopfRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okopf-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkopfRegistry;
