import React from 'react';

const PurchasesBids = ({
    match: {path}
}) => (
    <eaist-purchases-bids
        ref={
            element => {
                if (element) {
                    element.onOpen = id => window.open(`${path}${id}`);
                    element.onopenProcedure = id => window.open(`/index.html#/definition-supplier/preparation-publication/${id}`);
                }
            }
        } />
);

export default PurchasesBids;
