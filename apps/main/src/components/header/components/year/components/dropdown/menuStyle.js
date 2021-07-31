export default {
    container: {
        position: 'absolute',
        zIndex: 1,
        overflowY: 'hidden',
        width: ({maxWidth}) => maxWidth
            ? maxWidth
            : 'calc(100% + 10px)',
        transform: ({isReversedY, isReversedX}) => [[
            isReversedX ? 'translateX(5px)': 'translateX(-5px)',
            isReversedY ? 'translateY(-100%)' : ''
        ]],
        top: ({isReversedY}) => isReversedY ? 0 : null,
        right: ({isReversedX}) => isReversedX ? 0 : null,
        pointerEvents: 'none'
    },
    menu: {
        boxShadow: [[0, 0, 7.7, 1.4, 'rgba(0, 0, 0, 0.05)']],
        border: [[1, 'solid', '#E1E7EB']],
        borderRadius: ({isReversedY}) => isReversedY
            ? [[5, 5, 0, 0]]
            : [[0, 0, 5, 5]],
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: ({maxHeight}) => maxHeight,
        marginTop: ({isReversedY}) => isReversedY ? 5 : 0,
        marginBottom: ({isReversedY}) => isReversedY ? 0 : 5,
        marginLeft: 4,
        marginRight: 3,
        top: ({isReversedY}) => isReversedY ? 0 : null,
        pointerEvents: 'initial',
        overflow: 'hidden'
    },
    options: {
        flex: 1,
        overflowY: 'auto',
        minHeight: 1,

        '&::-webkit-scrollbar': {
            width: '3px',
            height: '3px',
            'background-color': '#f5f5f5',

        },

        '&::-webkit-scrollbar-thumb': {
            'background-color': '#E0E0E0',
        },
    }
};