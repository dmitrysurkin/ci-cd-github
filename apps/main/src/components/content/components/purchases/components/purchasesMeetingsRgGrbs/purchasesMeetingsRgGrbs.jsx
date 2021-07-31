import React from 'react';

const PurchasesMeetingsRgGrbs = ({
    match: {
        url,
        path,
        params: {id = 'new'}
    },
    history
}) => (
    <eaist-purchases-meetings-rg-grbs
        entity-id={id}
        ref={element => {
            if (element) {
                element.onOpen = id => window.open(`${path}/${id}`);
                element.close = () => history.push(url.replace(id, ''));
            }
        }} />
);

export default PurchasesMeetingsRgGrbs;
