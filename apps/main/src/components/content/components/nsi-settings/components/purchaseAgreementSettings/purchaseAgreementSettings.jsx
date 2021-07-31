import React from 'react';

const PurchaseAgreementSettings = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-purchase-agreement-settings
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default PurchaseAgreementSettings;
