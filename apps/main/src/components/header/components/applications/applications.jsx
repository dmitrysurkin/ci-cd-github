import React from 'react';

const Applications = ({
    Glyph,
    Link
}) => ({
    classes
}) => {
    return (
        <Link
            className={classes.container}
            to='/index.html#/current-applications'
            target="_blank">
            <div className={classes.icon}>
                <Glyph
                    name="add-circle"
                    size={24} />
            </div>
            <div className={classes.title}>
                Заявки
            </div>
        </Link>
    );
};

export default Applications;
