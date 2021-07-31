import React from 'react';
import(/* webpackIgnore: true */ '/module/nsi/static/apps/institutionTypeRegistry.js');

const InstitutionTypeRegistry = ({
    history,
    match: {
        path,
    },
}) => (
    <eaist-institution-type-registry
        ref={element => element && (element.onOpen = id => history.push(`${path}${id}`))}
/>);

export default InstitutionTypeRegistry;
