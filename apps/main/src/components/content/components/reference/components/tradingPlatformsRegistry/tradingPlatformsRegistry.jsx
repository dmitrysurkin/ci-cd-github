import React from 'react';
import(/* webpackIgnore: true */ '/module/nsi/static/apps/tradingPlatformsRegistry.js');

const TradingPlatformsRegistry = ({
    history,
    match: {
        path,
    },
}) => (<eaist-trading-platforms-registry
    ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
/>);

export default TradingPlatformsRegistry;
