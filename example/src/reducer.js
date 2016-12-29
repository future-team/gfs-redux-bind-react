import createReducer from './createReducer'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    num:0,
    permission:{},
    liker:[],
    fetching: false
})

export const like = createReducer('like', initialState, {
    ['FETCH_START']: (data, action) => {
        console.log('FETCH_START', data, action)
        return data.merge({
            fetching: true
        })
    },
    ['GET_DETAIL']: (data, action) => {
        if(action.data && action.data.code === 200){
            // TODO data format
            console.log('GET_DETAIL', data, action)
        }
        return data.merge(Immutable.fromJS(action.data), {
            fetching: false
        })
    },
    ['ADD_LIKE']: (data, action) => {
        if(action.data && action.data.code === 200){
            // TODO data format
            // console.log('ADD_LIKE', data, action)
        }
        return data.merge(Immutable.fromJS(action.data), {
            fetching: false
        })
    },
    ['REDUCE_LIKE']: (data, action) => {
        if(action.data && action.data.code === 200){
            // TODO data format
            // console.log('REDUCE_LIKE', data, action)
        }
        return data.merge(Immutable.fromJS(action.data), {
            fetching: false
        })
    }
})