import {withRouter} from 'react-router-dom';
import financeLimitProject from './financeLimitProject.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/financeLimitProject.js');

export default withRouter(financeLimitProject);
