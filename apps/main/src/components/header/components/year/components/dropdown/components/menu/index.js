import menu from './menu.jsx';
import {useTransition, animated} from 'react-spring';

export default menu({
    useTransition, 
    AnimatedDiv: animated.div,
});