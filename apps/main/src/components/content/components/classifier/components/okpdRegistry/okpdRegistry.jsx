import React from 'react';

const OkpdRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okpd-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OkpdRegistry;
