import React from 'react';

const SectorAgreement = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-sector-agreement
        entity-id={id}
        ref={
            element => {
                if (element) {
                   element.onClose = () => history.push(url.split('mrgBid')[0]);
                   element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
                   element.onOpenBid = id => window.open(`/arm-mrg.html#/mrg-bid/${id}`);
                   element.onOpenProcedure = id => window.open(`/index.html#/definition-supplier/preparation-publication/${id}`);
                   element.onOpenDetailObject = id => window.open(`/index.html#/schedule/detail-objects/${id}`);
              }
            }
        }
    />
);

export default SectorAgreement;
