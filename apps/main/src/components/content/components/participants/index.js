import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import participants from './participants.jsx';

import ParticipantCustomerRegistry from './components/participantCustomerRegistry';


export default withRouter(participants({
    Switch,
    Route,
    Redirect,
    ParticipantCustomerRegistry
}));
