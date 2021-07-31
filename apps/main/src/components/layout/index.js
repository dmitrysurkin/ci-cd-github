import withStyle from 'react-jss';
import layout from './layout.jsx';
import styles from './styles';

import Header from 'Component/header';
import Sidebar from 'Component/sidebar';

export default withStyle(styles)(layout({
    Header,
    Sidebar,
    Tab: Sidebar.Tab
}));
