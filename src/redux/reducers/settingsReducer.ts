import {
    SET_ACTIVE_TAB,
    SET_CURRENT_PAGE,
} from '../actionTypes/settingsActionTypes'
import { TABS } from '../../constants'

const initialState = {
    activeTab: TABS.all,
    currentPage: 1,
    rowsPerPage: 10,
}

export const settingsReducer = (state = initialState, action: any) => {
    switch(action.type) {
    case SET_ACTIVE_TAB: {
        const { activeTab } = action
        return ({
            ...state,
            activeTab,
        })
    }
    case SET_CURRENT_PAGE: {
        const { newPage } = action
        return ({
            ...state,
            currentPage: newPage,
        })
    }
    default: return state
    }
}
