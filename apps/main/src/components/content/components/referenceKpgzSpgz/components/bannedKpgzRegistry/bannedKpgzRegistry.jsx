import React from 'react';

const BannedKpgzRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-banned-kpgz-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default BannedKpgzRegistry;
