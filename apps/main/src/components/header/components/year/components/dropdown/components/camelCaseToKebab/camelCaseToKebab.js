export const CAPTURE = /[a-z0-9][A-Z]/g;

const camelCaseToKebab = name => {
    if (!name) {
        throw Error('name is required');
    }

    return name
        .replace(CAPTURE, ([first, second]) => `${first}-${second}`)
        .toLowerCase();
};

export default camelCaseToKebab;