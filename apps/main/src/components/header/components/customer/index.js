import withStyle from 'react-jss';
import applications from './customer.jsx';
import style from './style';

import Glyph from '@dots-java/adapters/react/glyph';
import CustomerSelection from '@dots-java/adapters/native/customerSelectionWidget';

export default withStyle(style)(applications({
    Glyph,
    CustomerSelection,
}));
