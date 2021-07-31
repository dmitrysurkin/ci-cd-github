import React from 'react';

const Characteristic = ({
    history,
    match: {
        path,
        url,
        params: {id},
    }
}) => (
    <eaist-characteristic
        entity-id={id}
        ref={
                element => {
                    if (element) {
                        element.onOpenKpgz = entityId => history.push(path.replace(path, `/module/nsi/static/referenceKpgzSpgz/kpgz/${entityId}`));
                        element.onClose = () => history.push(url.replace(id, ''));
                    }
                }
            } />
);

export default Characteristic;
