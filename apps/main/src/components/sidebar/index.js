import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import sidebar from './sidebar.jsx';
import connector from './connector';

import {Sidebar, Tab} from '@dots-java/adapters/react/sidebarWidget';

export default withRouter(connect(connector, null)(sidebar({
    Sidebar,
    Tab
})));
