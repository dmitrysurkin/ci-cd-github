import React from 'react';

const EmiasconvertionRegistry = ({
    history,
    match: {
        path,
        params: {id},
    }
}) => (
    <eaist-emiasconvertion-registry
        entity-id={id}
        ref={element => element && (element.onOpen = entityId => history.push(`${path}/${entityId}`))} />
);

export default EmiasconvertionRegistry;
