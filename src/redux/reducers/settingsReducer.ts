import { SET_ACTIVE_TAB } from '../actionTypes/settingsActionTypes'
import { TABS } from '../../constants'

const initialState = {
    activeTab: TABS.all,
}

const settingsReducer = (state = initialState, action: any) => {
    switch(action.type) {
    case SET_ACTIVE_TAB: {
        const { activeTab } = action
        return ({
            ...state,
            activeTab,
        })
    }
    default: return state
    }
}

export { settingsReducer }