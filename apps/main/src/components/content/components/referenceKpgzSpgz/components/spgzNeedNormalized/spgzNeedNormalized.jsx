import React from 'react';

const SpgzNeedNormalized = ({
    history,
    match: {
        path,
        params: {id},
    }
}) => (
    <eaist-spgz-need-normalized-registry
        entity-id={id}
        ref={element => element && (element.onOpen = entityId => history.push(`${path}/${entityId}`))} />
);

export default SpgzNeedNormalized;
