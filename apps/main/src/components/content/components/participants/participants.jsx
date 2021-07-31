import React from 'react';

const Participants = ({
    Switch,
    Route,
    Redirect,
    ParticipantCustomerRegistry
}) => ({
    match: {path}
}) => (
    <Switch>
        <Route
            path={`${path}/participantCustomer/`}
            component={ParticipantCustomerRegistry} />
        
        <Redirect
            from="/"
            to={`${path}/participantCustomer/`} />
    </Switch>
);

export default Participants;
