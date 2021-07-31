import withStyle from 'react-jss';
import {Link} from 'react-router-dom';
import notifications from './notifications.jsx';
import style from './style';

import Glyph from '@dots-java/adapters/react/glyph';

export default withStyle(style)(notifications({
    Glyph,
    Link
}));
