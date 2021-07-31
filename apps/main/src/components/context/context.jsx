import {useEffect} from 'react';

export const Context = ({
    fetch
}) => {
    useEffect(() => {
        fetch();
    }, []);

    return null;
};

export default Context;