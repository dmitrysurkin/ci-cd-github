import React from 'react';

const BidsRgMrgCoordination = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-bids-rg-mrg-coordination
        entity-id={id}
        ref={
            element => {
                if (element) {
                   element.onClose = () => history.push(url.replace(id, ''));
                   element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                   element.onOpenPrevBid = id => window.open(`/arm-mrg.html#/mrg-bid/${id}`);
                   element.onOpenDetailObject = id => window.open(`/index.html#/schedule/detail-objects/${id}`);
              }
            }
        }
    />
);

export default BidsRgMrgCoordination;
