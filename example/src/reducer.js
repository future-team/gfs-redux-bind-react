import createReducer from './createReducer'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    num: 0,
    liker: [],
    fetching: false
})

export const like = createReducer('like', initialState, {
    ['FETCH_START']: (data, action) => {
        // TODO data format
        return data.merge({
            fetching: true
        })
    },
    ['ADD_LIKE']: (data, action) => {
        // TODO data format
        return data.merge(Immutable.fromJS(action.data), {
            fetching: false
        })
    },
    ['REDUCE_LIKE']: (data, action) => {
        // TODO data format
        return data.merge(Immutable.fromJS(action.data), {
            fetching: false
        })
    }
})