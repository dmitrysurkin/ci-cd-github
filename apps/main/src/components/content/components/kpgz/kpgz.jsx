import React from 'react';

const Kpgz = ({
    history,
    match: {
        url,
        params: {id},
    }
}) => (
    <kpgz
        entity-id={id}
        ref={
                element => {
                    if (element) {
                        element.onOpenParentKpgz = entityId => history.push(url.replace(id, entityId));
                        element.onOpenOkpd2 = entityId => history.push(url.replace(id, entityId));
                    }
                }
            } />
);

export default Kpgz;
