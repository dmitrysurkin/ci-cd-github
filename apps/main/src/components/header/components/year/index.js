import withStyle from 'react-jss';
import withIdentity from './components/hoc/compositeIdentity';

import year from './year.jsx';

import {Glyph} from '@dots-java/adapters/react/glyph';
import {Button} from './components/button';
import Dropdown, {Dropdown as Unstyled, Identities} from './components/dropdown';

import style from './style';
import valueStyle from './valueStyle';
import buttonStyle from './buttonStyle';

export default withStyle(style)(year({
    Glyph,
    Button: withStyle(buttonStyle)(Button({})),
    Dropdown: {
        ...Dropdown,
        Value: withIdentity(Identities.VALUE)(withStyle(valueStyle)(Unstyled.Value))
    }
}));
