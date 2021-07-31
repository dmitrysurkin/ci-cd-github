import React from 'react';

const Footer = ({
    classes,
    children
}) => {
    return (
        <div
            className={classes.footer}
            element-id="footer">
            {children}
        </div>
    );
};

export default Footer;