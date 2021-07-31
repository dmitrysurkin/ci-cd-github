import React from 'react';

/**
    Контейнер для опции дропдауна
    @reactProp {boolean} selected - флаг для отображения является опция выбранной или нет (true === опция выбрана)
    @reactProp {boolean} closeOnSelect (по умолчанию true) - флаг для отключения сворачивания списка после выбора (сворачивание - Props toggle)
    @reactProp {function} onClick
    @reactProp {!function} toggle - внутренняя функция составного компонента,
        используется для сворачивания раскрытого меню при клике
*/
export const Option = ({
    classes,
    selected,
    onClick,
    toggle,
    children,
    closeOnSelect = true,
    ...props
}) => {
    return (
        <div
            data-test-id="Опция"
            className={classes.option}
            element-id="option"
            element-state={selected ? 'selected' : null}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
                if (toggle && closeOnSelect) {
                    toggle();
                }
            }}
            {...props}>
            {children}
        </div>
    );
};

export default Option;