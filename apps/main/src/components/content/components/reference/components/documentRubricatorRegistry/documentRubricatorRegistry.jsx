import React from 'react';

const DocumentRubricatorRegistry = ({
    history,
    match: {
        path,
    },
}) => (<eaist-document-rubricator-registry
    ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
/>);

export default DocumentRubricatorRegistry;