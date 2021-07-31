import React from 'react';

const OktmoRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-oktmo-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default OktmoRegistry;
