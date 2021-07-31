import React from 'react';

/**
    Контейнер для значения дропдауна
    @reactProp {function} onClick
    @reactProp {!function} toggle - внутренняя функция составного компонента,
        используется для сворачивания раскрытого меню при клике
*/
const Value = ({
    classes,
    isOpen,
    toggle,
    onClick,
    children
}) => {
    return (
        <div
            data-test-id="Значение"
            className={classes.value}
            element-id="value"
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                if (toggle) {
                    toggle();
                }
            }}>
            {('function' === typeof children)
                ? children({isOpen})
                : children}
        </div>

    );
};

export default Value;