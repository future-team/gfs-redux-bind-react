import createReducer from './createReducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    num:0,
    permission:{},
    liker:[]
});

export const like = createReducer("like", initialState, {
    ['GET_DETAIL']: (data, action) => {
        if(action.data && action.data.code==200){
            // TODO data format
        }
        return data.merge(Immutable.fromJS(action.data));
    },
    ['ADD_LIKE']: (data, action) => {
        if(action.data && action.data.code==200){
            // TODO data format
        }
        return data.merge(Immutable.fromJS(action.data));
    },
    ['REDUCE_LIKE']: (data, action) => {
        if(action.data && action.data.code==200){
            // TODO data format
        }
        return data.merge(Immutable.fromJS(action.data));
    }
});