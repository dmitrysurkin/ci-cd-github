export default {
    value: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        border: [[1, 'solid', '#E1E7EB']],
        borderRadius: ({isOpen, isReversedY}) => isOpen
            ? isReversedY
                ? [[0, 0, 5, 5]]
                : [[5, 5, 0, 0]]
            : 5,
        background: ({disabled, immutable}) => (disabled || immutable)
            ? '#F5F5F5'
            : '#FFFFFF',
        minHeight: 22,
        padding: [[4, 10, 4, 10]],
        outline: 'none',
        fontSize: 14,
        cursor: ({disabled, immutable}) => (disabled ||immutable) ? 'no-drop' : 'pointer',
        transition: 'all 0.1s ease-in',
        boxShadow: ({isOpen}) =>
            isOpen
                ? [[0, 0, 7.7, 1.4, 'rgba(0, 0, 0, 0.05)']]
                : null
    }
};