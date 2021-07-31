import React from 'react';

const Ktru = ({
    history,
    match: {
        path,
        url,
        params: {id},
    }
}) => (
    <eaist-ktru
        entity-id={id}
        ref={
                element => {
                    if (element) {
                        element.onOpenVersion = entityId => history.push(url.replace(id, entityId));
                        element.onOpenSpgz = entityId => history.push(path.replace(path, `/module/nsi/static/referenceKpgzSpgz/spgz/${entityId}`));
                        element.onClose = () => history.push(url.replace(id, ''));
                    }
                }
            } />
);

export default Ktru;
