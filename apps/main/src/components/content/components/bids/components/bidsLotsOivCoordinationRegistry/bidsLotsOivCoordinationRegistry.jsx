import React from 'react';

const BidsLotsOivCoordinationRegistry = ({
    window
}) => ({
    match: {path},
}) => (
    <eaist-bids-lots-oiv-coordination-registry
        ref={
            element => {
                if (element) {
                    element.onOpen = id => window.open(`${path}/mrgBid/${id}`);
                    element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                }
            }
        } />
);

export default BidsLotsOivCoordinationRegistry;
