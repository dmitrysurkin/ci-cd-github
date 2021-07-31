import withStyle from 'react-jss';
import button from './button.jsx';
import style from './style';

export const Button = button;

export default withStyle(style)(button());
