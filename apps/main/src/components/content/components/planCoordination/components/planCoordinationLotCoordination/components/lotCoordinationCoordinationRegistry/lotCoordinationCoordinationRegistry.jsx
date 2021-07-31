import React from 'react';

const LotCoordinationCoordinationRegistry = ({
    window
}) => () => (
    <eaist-lot-coordination-coordination-registry
        ref={element => element && (element.onOpen = id => window.open(`/index.html#/schedule/lots/${id}`))} />
);

export default LotCoordinationCoordinationRegistry;
