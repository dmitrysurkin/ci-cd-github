import React from 'react';
import(/* webpackIgnore: true */ '/module/nsi/static/apps/positionRegistry.js');

const PositionRegistry = ({
    history,
    match: {
        path,
    },
}) => (
    <eaist-position-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
    />);

export default PositionRegistry;
