import React from 'react';

/**
    Контейнер для опций дропдайна

    @reactProp {boolean} isOpen - флаг для отображения меню (true === комбобокс раскрыт)
    @reactProp {!function} toggle - внутренняя функция составного компонента, используется для сворачивания раскрытого меню при клике

 */
const Menu = ({
    useTransition,
    AnimatedDiv,
}) => ({
    identities,
    animation
}) => ({
    classes,
    isOpen,
    isReversedY,
    toggle,
    children
}) => {
    const isRenderprop = 'function' === typeof children;

    const [search, footer, options] = isRenderprop
        ? [null, null, children(toggle)]
        : children
            .reduce((result, child) => {
                if ('object' === typeof child) {
                    const {type} = child;
                    if (identities.SEARCH === type.compositeIdentity) {
                        result[0] = child;
                    } else if (identities.FOOTER === type.compositeIdentity) {
                        result[1] = child;
                    } else {
                        result[2].push(React.cloneElement(child, {toggle}));
                    }
                } else {
                    result[2].push(child);
                }

                return result;
            }, [null, null, []]);

    const transitions = useTransition(isOpen, () => isOpen, animation({isReversedY}));

    return transitions.map(({item, key, props}) => item
        ? (
            <div
                key={key}
                className={classes.container}
                element-id="menu">
                <AnimatedDiv
                    style={props}
                    className={classes.menu}>
                    {search}
                    <div className={classes.options}>
                        {options}
                    </div>
                    {footer}
                </AnimatedDiv>
            </div>
        ) : null);
};

export default Menu;
