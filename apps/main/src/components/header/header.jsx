import React from 'react';

const _Header = ({
    Header,
    Year,
    Customer,
    Applications,
    Monitoring,
    Notifications,
}) => ({
    lastCustomer,
    customerShortName,
    year,
    years,
    notifications,
    points,
    updateYear,
    updateCustomer,
}) => {
    return (  
        <Header>
            <Year 
                value={year}
                options={years}
                onSelect={updateYear} />
            <Customer 
                customerId={lastCustomer}
                value={customerShortName}
                onSelect={updateCustomer} />
            <div style={{flex: 1}} />
            <Notifications count={notifications} />
            <Applications />
            <Monitoring points={points} />
        </Header>
    );
};

export default _Header;
