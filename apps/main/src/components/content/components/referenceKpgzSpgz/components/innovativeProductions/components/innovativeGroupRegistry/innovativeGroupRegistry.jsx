import React from 'react';

const InnovativeGroupRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-innovative-group-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default InnovativeGroupRegistry;
