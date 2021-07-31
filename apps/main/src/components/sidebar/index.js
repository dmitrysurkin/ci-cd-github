import {withRouter} from 'react-router';
import sidebar from './sidebar.jsx';
import E2Sidebar from 'WebComponent/sidebar';

export default withRouter(sidebar({
    E2Sidebar,
    Tab: E2Sidebar.Tab
}));
