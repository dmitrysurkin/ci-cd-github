import React from 'react';

const Notifications = ({
    Glyph,
    Link
}) => ({
    classes,
    count = 0
}) => {
    return (
        <Link
            className={classes.container}
            to="/common/#/notifications?mainMenu=1"
            target="_blank">
            <div className={classes.icon}>
                <Glyph
                    name="bell"
                    size={24} />
            </div>
            <div className={classes.count}>
                {count}
            </div>
        </Link>
    );
};

export default Notifications;
