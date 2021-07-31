import React from 'react';

const TarifzoneRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <tarifzone-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default TarifzoneRegistry;
