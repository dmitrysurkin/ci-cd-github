import React from 'react';

const KosguRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-kosgu-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default KosguRegistry;
