import React from 'react';

const UtilityTarifZoneRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <utility-tarif-zone-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default UtilityTarifZoneRegistry;
