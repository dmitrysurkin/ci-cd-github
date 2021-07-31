import React from 'react';

const ContractCoordinationAgreedRegistry = ({
    window
}) => () => (
    <eaist-contract-coordination-agreed-registry
        ref={element => element && (element.onOpen = id => window.open(`/eaist2rc/#/contract/${id}/info`))} />
);

export default ContractCoordinationAgreedRegistry;
