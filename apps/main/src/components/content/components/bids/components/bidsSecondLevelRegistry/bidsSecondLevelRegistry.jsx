import React from 'react';

const BidsSecondLevelRegistry = ({
    window
}) => ({
    match: {path},
}) => (
    <eaist-bids-second-level-registry
        ref={element => element && (element.onOpen = id => window.open(`${path}${id}`))} />
);

export default BidsSecondLevelRegistry;
