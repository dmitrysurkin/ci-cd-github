import React from 'react';

const PurchasesCorrectionRemarksRegistry = () => (
    <eaist-purchases-correction-remarks-registry
        ref={element => element && (element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`))} />
);

export default PurchasesCorrectionRemarksRegistry;
