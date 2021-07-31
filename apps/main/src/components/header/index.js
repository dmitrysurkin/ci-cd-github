import {connect} from 'react-redux';
import header from './header.jsx';
import connector from './connector';
import dispatcher from './dispatcher';

import {Header} from '@dots-java/adapters/react/headerWidget';
import Year from './components/year';
import Customer from './components/customer';
import Applications from './components/applications';
import Monitoring from './components/monitoring';
import Notifications from './components/notifications';

export default connect(connector, dispatcher)(header({
    Header,
    Year,
    Customer,
    Applications,
    Monitoring,
    Notifications
}));
