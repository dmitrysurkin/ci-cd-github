import React from 'react';

const KtruRegistry = ({
    history,
    match: {
        path,
        params: {id},
    },
}) => (
    <eaist-ktru-registry
        entity-id={id}
        ref={element =>
            element &&
            (element.onOpen = entityId => history.push(`${path}/${entityId}`))
        }
    />
);

export default KtruRegistry;
