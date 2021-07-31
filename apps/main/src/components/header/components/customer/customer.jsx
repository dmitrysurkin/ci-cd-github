import React from 'react';

const Customer = ({
    Glyph,
    CustomerSelection
}) => ({
    classes,
    customerId,
    value,
    onSelect,
}) => {
    
    const add = async () => {
        const {
            id,
            shortName,
        } = await CustomerSelection({
            customerId,
        });

        onSelect({
            id,
            customerShortName: shortName
        });
    };

    return (
        <div 
            data-test-id="Выбрать заказчика"
            className={classes.container}
            onClick={add}>
            <div className={classes.icon}>
                <Glyph
                    name="down-circle"
                    size={24} />
            </div>
            <div className={classes.title}>
                {value}
            </div>
        </div>
    );
};

export default Customer;
