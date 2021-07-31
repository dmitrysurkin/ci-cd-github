import React from 'react';
import (/* webpackIgnore: true */ '/module/nsi/static/apps/referenceDocumentRegistry.js');

const ReferenceDocumentRegistry = ({
    history,
    match: {
        path,
    },
}) => (<eaist-reference-document-registry
    ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
/>);

export default ReferenceDocumentRegistry;