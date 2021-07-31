import React from 'react';

const PlanCoordinationPurchasePlanCoordinatedRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-plan-coordination-purchase-plan-coordinated-registry
        ref={element => element && (element.onOpen = id => window.open(`${path}/${id}`))} />
);

export default PlanCoordinationPurchasePlanCoordinatedRegistry;
