import React from 'react';

const ContractCoordinationCoordinationRegistry = ({
    window
}) => () => (
    <eaist-contract-coordination-coordination-registry
        ref={element => element && (element.onOpen = id => window.open(`/eaist2rc/#/contract/${id}/info`))} />
);

export default ContractCoordinationCoordinationRegistry;
