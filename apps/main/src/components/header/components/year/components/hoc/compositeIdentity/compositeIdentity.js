const withIdentity = identity => component => {
    const decorated = component;

    decorated.compositeIdentity = identity;

    return decorated;
};

export default withIdentity;
