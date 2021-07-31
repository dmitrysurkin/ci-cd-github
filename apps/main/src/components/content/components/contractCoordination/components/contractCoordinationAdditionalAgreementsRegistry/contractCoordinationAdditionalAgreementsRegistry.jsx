import React from 'react';

const ContractCoordinationAdditionalAgreementsRegistry = ({
    window
}) => () => (
    <eaist-contract-coordination-additional-agreements-registry
        ref={element => element && (element.onOpen = id => window.open(`/eaist2rc/#/contract/${id}/info`))} />
);

export default ContractCoordinationAdditionalAgreementsRegistry;
