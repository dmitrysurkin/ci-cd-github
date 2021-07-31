export default transition => ({
    value: {
        paddingLeft: 20,
        paddingRight: 20,
        background: ({isOpen}) => isOpen
            ? '#FFFFFF'
            : 'transparent',
        outline: 'none',
        cursor: 'pointer',
        color: ({isOpen}) => isOpen ? 'inherit' : '#FFFFFF',
        transition: [['all', transition.fast, 'ease-in-out']],
        boxShadow: ({isOpen, isReversedY}) => isOpen
            ? (isReversedY
                ? '-1px -1px 5px #E6E6E6'
                : '1px 4px 5px #E6E6E6')
            : null
    }
});