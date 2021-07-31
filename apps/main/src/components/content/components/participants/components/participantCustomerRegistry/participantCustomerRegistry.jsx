import React from 'react';

const ParticipantCustomerRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-participant-customer-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default ParticipantCustomerRegistry;
