import React from 'react';

const Emiasconvertion = ({
    history,
    match: {
        path,
        url,
        params: {id},
    }
}) => (
    <eaist-emiasconvertion
        entity-id={id}
        ref={
                element => {
                    if (element) {
                        element.onOpen = entityId => history.push(path.replace(path, `/module/nsi/static/referenceKpgzSpgz/emiasconvertion/${entityId}`));
                        element.onClose = () => history.push(url.replace(id, ''));
                    }
                }
            } />
);

export default Emiasconvertion;
