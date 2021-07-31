import React from 'react';

const BidsRgMrgCoordinationRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-bids-rg-mrg-coordination-registry
        ref={
            element => {
                if (element) {
                    element.onOpen = id => window.open(`${path}/${id}`);
                    element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                    element.onOpenProcedure = id => window.open(`/index.html#/definition-supplier/preparation-publication/${id}`);
                }
            }
        } />
);

export default BidsRgMrgCoordinationRegistry;
