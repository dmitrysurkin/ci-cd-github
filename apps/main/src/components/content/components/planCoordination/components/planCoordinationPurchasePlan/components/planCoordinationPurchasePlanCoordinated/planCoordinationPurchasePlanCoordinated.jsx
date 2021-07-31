import React from 'react';

const PlanCoordinationPurchasePlanCoordinated = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-plan-coordination-purchase-plan-coordinated
        entity-id={id}
        ref={
           element => {
              if (element) {
                 element.onClose = () => history.push(url.replace(id, ''));
                 element.onOpenPurchase = id => window.open(`/index.html#/purchase-plan/purchase-objects/${id}`);
              }
           }
        }
    />
);

export default PlanCoordinationPurchasePlanCoordinated;
