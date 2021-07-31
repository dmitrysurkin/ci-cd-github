import React, {useState, Children} from 'react';

const Dropdown = () => ({
    identities,
    CamelCaseToKebab
}) => ({
    classes,

    name,
    maxHeight = 300,
    maxWidth,
    error,
    disabled,
    color,
    children,
    ...rest
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const elementState = disabled
        ? 'disabled'
        : isOpen
            ? 'enabled:opened'
            : 'enabled:closed';

    return (
        <div
            {...rest}
            data-test-id="Селект"
            className={classes.container}
            element-id={name ? CamelCaseToKebab(name) : null}
            element-type="input:dropdown"
            element-state={elementState}>
            {isOpen && (
                <div
                    data-test-id="Фон"
                    className={classes.cloack}
                    onClick={toggle} />
            )}
            {Children.map(children, child => {

                switch (child.type.compositeIdentity) {

                    case identities.MENU:
                        return React.cloneElement(child, {
                            ['data-test-id']: 'Меню',
                            maxHeight,
                            maxWidth,
                            isOpen,
                            toggle
                        });

                    case identities.VALUE:
                        return React.cloneElement(child, {
                            color,
                            error,
                            isOpen,
                            toggle
                        });

                    default:
                        return null;
                }
            })}
            {error && (
                <div className={classes.error}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
