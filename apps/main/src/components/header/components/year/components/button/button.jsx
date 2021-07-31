import React from 'react';

const Button = () => ({
    classes,
    children,
    hide,
    title,
    ...rest
}) => {
    return !hide ? (
        <button
            {...rest}
            data-test-id="Кнопка"
            className={classes.button}
            title={title}>
            {children}
        </button>
    ) : null;
};

export default Button;
