import React from 'react';

const Spgz = ({
    history,
    match: {
        url,
        params: {id},
    }
}) => (
    <eaist-spgz
        entity-id={id}
        ref={
                element => {
                    if (element) {
                        element.onOpenKpgz = entityId => history.push(`/module/nsi/static/referenceKpgzSpgz/kpgz/${entityId}`);
                        element.onOpenOkpd = entityId => history.push(`/module/nsi/static/classifier/okpd/${entityId}`);
                        element.onOpenOkpd2 = entityId => history.push(`/module/nsi/static/classifier/okpd2/${entityId}`);
                        element.onOpenContractForm2 = entityId => history.push(`/module/bktz/static/documentation/templateForm2/${entityId}`);
                        element.onOpenContractTechTasks = entityId => history.push(`/module/bktz/static/documentation/contractTechTask/${entityId}`);
                        element.onOpenContractTemplates = entityId => history.push(`/module/bktz/static/contracts/contractBlock44/${entityId}`);
                        element.onOpenTemplateFormNmc = entityId => history.push(`/module/bktz/static/documentation/templateFormNmc/${entityId}`);
                        element.onOpenExemplaryRatingCriterias = entityId => history.push(`/module/bktz/static/reference/exemplaryRatingCriteria/${entityId}`);
                        element.onClose = () => history.push(url.replace(id, ''));
                    }
                }
        } />
);

export default Spgz;
