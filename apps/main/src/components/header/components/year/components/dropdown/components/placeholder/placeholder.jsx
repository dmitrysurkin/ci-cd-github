import React from 'react';

/**
    Контейнер для поиска по dropdown

    @reactProp {!function} toggle - внутренняя функция составного компонента, используется для сворачивания раскрытого меню при клике
*/
const Placeholder = ({
    classes,
    children
}) => {
    return (
        <div
            className={classes.placeholder}
            element-id="placeholder">
            {children}
        </div>
    );
};

export default Placeholder;