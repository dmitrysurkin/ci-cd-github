import React from 'react';

const InnovativeSpgzRegistry = ({
    history
}) => (
    <eaist-innovative-spgz-registry
        ref={
            element => {
                if (element) {                        
                    element.onOpenGroup = entityId => history.push(`/module/nsi/static/referenceKpgzSpgz/groups/${entityId}`);
                    element.onOpenSpgz = entityId => history.push(`/module/nsi/static/referenceKpgzSpgz/spgz/${entityId}`);
                }
            }
        } />
);

export default InnovativeSpgzRegistry;
