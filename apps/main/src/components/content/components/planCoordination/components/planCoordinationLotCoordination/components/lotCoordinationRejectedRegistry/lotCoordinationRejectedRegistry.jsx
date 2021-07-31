import React from 'react';

const LotCoordinationRejectedRegistry = ({
    window
}) => () => (
    <eaist-lot-coordination-rejected-registry
        ref={element => element && (element.onOpen = id => window.open(`/index.html#/schedule/lots/${id}`))} />
);

export default LotCoordinationRejectedRegistry;
