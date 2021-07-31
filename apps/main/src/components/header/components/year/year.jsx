import React from 'react';

const Year = ({
    Glyph,
    Button,
    Dropdown: {
        Dropdown,
        Value,
        Menu,
        Option
    }
}) => ({
    classes,
    value,
    options = [],
    onSelect
}) => {
    return (
        <div
            data-test-id='Выбрать год' 
            className={classes.container}>
            <Dropdown name='year'>
                <Value>
                    {({isOpen}) => (
                        <div className={classes.value}>
                            <Button isOpen={isOpen} type='control'>
                                <Glyph name='down-circle' size={24} />
                            </Button>
                            <div className={classes.year}>{isOpen ? <b>{value}</b> : value}</div>
                        </div>
                    )}
                </Value>
                <Menu>
                    {options.map((option, index) => (
                        <Option
                            key={option}
                            data-test-id={`Строка номер ${index + 1}`}
                            onClick={() => onSelect(option)}
                            selected={value === option}
                            value={option}>
                            <div className={classes.option}>{option}</div>
                        </Option>
                    ))}
                </Menu>
            </Dropdown>
        </div>
    );
};

export default Year;
