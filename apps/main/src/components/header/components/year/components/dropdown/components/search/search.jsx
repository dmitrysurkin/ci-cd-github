import React from 'react';

/**
    Контейнер для поиска по dropdown

    @reactProp {!function} toggle - внутренняя функция составного компонента, используется для сворачивания раскрытого меню при клике
*/
const Search = ({
    classes,
    children
}) => {
    return (
        <div
            className={classes.search}
            element-id="search">
            {children}
        </div>
    );
};

export default Search;