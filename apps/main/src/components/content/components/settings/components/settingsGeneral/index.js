import {withRouter} from 'react-router-dom';
import settingsGeneral from './settingsGeneral.jsx';
import(/* webpackIgnore: true */ '/module/arm-grbs/static/apps/settingsGeneral.js');

export default withRouter(settingsGeneral);
