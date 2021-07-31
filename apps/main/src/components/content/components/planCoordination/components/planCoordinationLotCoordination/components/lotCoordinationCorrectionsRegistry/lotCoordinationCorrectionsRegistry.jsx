import React from 'react';

const LotCoordinationCorrectionsRegistry = ({
    window
}) => () => (
    <eaist-lot-coordination-corrections-registry
        ref={element => element && (element.onOpen = id => window.open(`/index.html#/schedule/lots/${id}`))} />
);

export default LotCoordinationCorrectionsRegistry;
