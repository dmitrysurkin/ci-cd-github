import withStyle from 'react-jss';
import {Link} from 'react-router-dom';
import applications from './applications.jsx';
import style from './style';

import Glyph from '@dots-java/adapters/react/glyph';

export default withStyle(style)(applications({
    Glyph,
    Link
}));
