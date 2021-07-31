import React from 'react';
import(/* webpackIgnore: true */ '/module/nsi/static/apps/externalResourceRegistry.js');

const ExternalResourceRegistry = ({
    history,
    match: {
        path,
    },
}) => (<eaist-external-resource-registry
    ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
/>);

export default ExternalResourceRegistry;
