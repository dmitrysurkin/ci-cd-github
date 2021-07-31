import withStyle from 'react-jss';
import layout from './layout.jsx';
import style from './style';

import Header from 'Component/header';
import Sidebar from 'Component/sidebar';

export default withStyle(style)(layout({
    Header,
    Sidebar,
    Tab: Sidebar.Tab
}));
