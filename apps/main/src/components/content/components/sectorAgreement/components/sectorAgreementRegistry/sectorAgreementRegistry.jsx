import React from 'react';

const SectorAgreementRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-sector-agreement-registry
        ref={
            element => {
               if (element) {
                    element.onOpen = id => window.open(`${path}/mrgBid/${id}`);
                    element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
               }
            }
        } />
);

export default SectorAgreementRegistry;
