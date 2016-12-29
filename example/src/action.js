const defaultData = {
    num: 123,
    liker: [
        {id: 123456, name: 'Genffy'},
        {id: 123457, name: 'Madao'},
        {id: 123458, name: 'Leaf'},
        {id: 123459, name: 'Aron'}
    ],
    permission: {auth: 10000000001}
}
export function getDetail(id){
    return dispatch=> {
        dispatch({
            type: 'FETCH_START'
        })
        console.log('getDetail', id)
        setTimeout(()=>{
            dispatch({
                type: 'GET_DETAIL',
                data: defaultData
            })
        }, 500)
    }
}
export function addLike(num){
    return dispatch=> {
        dispatch({
            type: 'FETCH_START'
        })
        console.log('add num', num)
        defaultData.num = num
        const data = defaultData
        setTimeout(()=>{
            dispatch({
                type: 'ADD_LIKE',
                data: data
            })
        }, 500)
    }
}

export function reduceLike(num){
    return dispatch=> {
        dispatch({
            type: 'FETCH_START'
        })
        console.log('reduce num', num)
        defaultData.num = num
        const data = defaultData
        setTimeout(()=>{
            dispatch({
                type: 'REDUCE_LIKE',
                data: data
            })
        }, 500)
    }
}