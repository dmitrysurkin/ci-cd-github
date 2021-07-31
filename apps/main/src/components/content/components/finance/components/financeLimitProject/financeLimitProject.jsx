import React from 'react';

const FinanceLimitProject = ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-finance-limit-project
        entity-id={id}
        ref={element => element && (element.onClose = () => history.push(url.replace(id, '')))} />
);

export default FinanceLimitProject;
