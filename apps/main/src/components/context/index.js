import {connect} from 'react-redux';
import context from './context.jsx';
import dispatcher from './dispatcher';

export default connect(null, dispatcher)(context);
