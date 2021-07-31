export default ({button, transition}) => ({
    button: {
        border: 0,
        borderRadius: button.borderRadius,
        verticalAlign: 'top',
        margin: 0,
        cursor: 'pointer',
        transition: [['all', transition.fast, 'ease-in-out']],
        color: '#C4C7CC',
        fontWeight: 700,
        background: () => button.background.control,
        opacity: ({isOpen}) => isOpen
            ? 0
            : 1,

        '&:focus': {
            outline: 'none'
        }
    }
});