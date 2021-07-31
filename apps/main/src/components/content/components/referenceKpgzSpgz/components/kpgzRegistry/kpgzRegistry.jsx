import React from 'react';

const KpgzRegistry = ({
    history,
    match: {
        path,
        params: {date}
    }
}) => (
    <eaist-kpgz-registry
        ref={
            element => {
                if (element) {
                    element.onOpenKpgz = entityId => history.push(`${path}${entityId}`);
                    element.onOpenDateList = date => window.open(`${window.location.origin}/module/nsi/static/referenceKpgzSpgz/kpgz/show-for-date/${date}`);                        
                    element.onGetDate = () => date;
                }
            }
        } />
);

export default KpgzRegistry;