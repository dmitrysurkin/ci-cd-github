import React from 'react';

const PrepaymentExcessSettings = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-prepayment-excess-settings
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default PrepaymentExcessSettings;
