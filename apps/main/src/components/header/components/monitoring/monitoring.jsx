import React from 'react';

const Monitoring = ({
    classes,
    points
}) => {
    return (
        <div className={classes.container}>
            <div className={classes.points}>
                {points || 0}
            </div>
        </div>
    );
};

export default Monitoring;
