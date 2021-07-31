import React from 'react';

const KtruConversion = ({
    history,
    match: {
        url,
        params: {id},
    }
}) => (
    <eaist-ktru-conversion
        entity-id={id}
        ref={element => element && (element.onClose = () => history.push(url.replace(id, '')))} />
);

export default KtruConversion;
