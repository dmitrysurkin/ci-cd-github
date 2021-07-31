import React from 'react';

const BidsFirstLevelRegistry = ({
    window
}) => ({
    match: {path},
}) => (
    <eaist-bids-first-level-registry
        ref={element => element && (element.onOpen = id => window.open(`${path}${id}`))} />
);

export default BidsFirstLevelRegistry;
