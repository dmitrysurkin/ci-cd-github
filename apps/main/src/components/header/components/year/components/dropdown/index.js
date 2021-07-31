import withStyle from 'react-jss';
import withIdentity from '../hoc/compositeIdentity';
import CamelCaseToKebab from './components/camelCaseToKebab';

import dropdown from './dropdown.jsx';
import menu from './components/menu';
import option from './components/option';
import placeholder from './components/placeholder';
import search from './components/search';
import footer from './components/footer';
import value from './components/value';

import dropdownStyle from './dropdownStyle';
import valueStyle from './valueStyle';
import menuStyle from './menuStyle';
import menuAnimationStyle from './menuAnimationStyle';
import optionStyle from './optionStyle';
import placeholderStyle from './placeholderStyle';
import searchStyle from './searchStyle';
import footerStyle from './footerStyle';

export const Identities = {
    MENU: Symbol(),
    OPTION: Symbol(),
    PLACEHOLDER: Symbol(),
    SEARCH: Symbol(),
    VALUE: Symbol(),
    FOOTER: Symbol()
};

export const Dropdown = {
    Dropdown: dropdown,
    Menu: menu,
    Option: option,
    Placeholder: placeholder,
    Search: search,
    Value: value,
    Footer: footer
};

export default {
    Menu: withIdentity(Identities.MENU)(withStyle(menuStyle)(menu({identities: Identities, animation: menuAnimationStyle}))),
    Option: withIdentity(Identities.OPTION)(withStyle(optionStyle)(option)),
    Placeholder: withIdentity(Identities.PLACEHOLDER)(withStyle(placeholderStyle)(placeholder)),
    Search: withIdentity(Identities.SEARCH)(withStyle(searchStyle)(search)),
    Value: withIdentity(Identities.VALUE)(withStyle(valueStyle)(value)),
    Footer: withIdentity(Identities.FOOTER)(withStyle(footerStyle)(footer)),
    Dropdown: withStyle(dropdownStyle)(dropdown({
        window: globalThis.window,
    })({
        CamelCaseToKebab,
        identities: Identities
    })),
    Identities: Identities
};
