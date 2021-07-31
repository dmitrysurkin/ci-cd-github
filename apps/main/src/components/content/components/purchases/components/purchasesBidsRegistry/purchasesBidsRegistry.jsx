import React from 'react';

const PurchasesBidsRegistry = ({
    match: {path},
}) => (
    <eaist-purchases-bids-registry
        ref={
            element => {
                if (element) {
                    element.onOpen = id => window.open(`${path}mrgBid/${id}`);
                    element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                }
            }
        } />
);

export default PurchasesBidsRegistry;
