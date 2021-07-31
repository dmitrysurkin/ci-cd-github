import React from 'react';

const Okpd2Registry = ({
    history,
    match: {
        path,
    }
}) => (
    <eaist-okpd2-registry
        ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))} />
);

export default Okpd2Registry;
