import React from 'react';

const LotCoordinationCoordinatedRegistry = ({
    window
}) => () => (
    <eaist-lot-coordination-coordinated-registry
        ref={element => element && (element.onOpen = id => window.open(`/index.html#/schedule/lots/${id}`))} />
);

export default LotCoordinationCoordinatedRegistry;
