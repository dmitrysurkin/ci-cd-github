import React from 'react';

const CharacteristicRegistry = ({
    history,
    match: {
        path,
        params: {id},
    },
}) => (
    <eaist-characteristic-registry
        entity-id={id}
        ref={element =>
            element &&
            (element.onOpen = entityId => history.push(`${path}/${entityId}`))
        }
    />
);

export default CharacteristicRegistry;
