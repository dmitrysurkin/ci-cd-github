export default ({isReversedY}) => ({
    from: {
        transform: `translate3d(0, ${isReversedY ? 100 : -100}%, 0)`
    },
    enter: {
        transform: 'translate3d(0, 0, 0)'
    },
    leave: {
        transform: `translate3d(0, ${isReversedY ? 100 : -100}%, 0)`
    },
    unique: true
});