import React from 'react';

const BidsLotsOivCoordination = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-bids-lots-oiv-coordination
        entity-id={id}
        ref={
            element => {
                if (element) {
                   element.onClose = () => history.push(url.split('mrgBid')[0]);
                   element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                   element.onOpenPrevBid = id => window.open(`/arm-mrg.html#/mrg-bid/${id}`);
                   element.onOpenProcedure = id => window.open(`/index.html#/definition-supplier/preparation-publication/${id}`);
              }
            }
        }
    />
);

export default BidsLotsOivCoordination;
