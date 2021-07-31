import React from 'react';

const CustomerRatingRegistry = ({
    history,
    match: {
        path,
    },
}) => (<eaist-customer-rating-registry
    ref={element => element && (element.onOpen = entityId => history.push(`${path}${entityId}`))}
/>);

export default CustomerRatingRegistry;