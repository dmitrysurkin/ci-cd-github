import React from 'react';

const NsiGoodsRegistry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-nsi-goods-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default NsiGoodsRegistry;
