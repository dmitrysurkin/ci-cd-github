export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textDecoration: 'none',
        padding: [[0, 10]]
    },
    points: {
        display: 'flex',
        borderRadius: '50%',
        height: 20,
        width: 20,
        border: 'none',
        fontSize: 11,
        fontWeight: 500,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        alignSelf: 'center',
        background: ({points = 0}) => (points <= 2)
            ? '#80DD7E'
            : ((points > 2) && (points <= 5))
                ? '#F8CA4E'
                : ((points > 5) && (points <= 8))
                    ? '#FF6666'
                    : '#D90000'
    }
};