const propPanel = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_PROP_PANEL':
            return {
                showProp: true
            }
        case 'HIDE_PROP_PANEL':
            return {
                showProp: false
            }
        default:
            return state;
    }
}
export default propPanel;