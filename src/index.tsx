import * as React from 'react'
import {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import dev from  './DevTools'

interface Props {
    LoadingBar: any;
    reducers: any;
    middleware: any;
    autoDevTools: boolean;
    isMock: boolean;
    Module: any;
}
// bar reducers middleware  Module
export default class BindReact extends Component<Props, {}> {
    dispatch: any;

    show(dispatch, Dev){
        const { Module, children} = this.props
        return (
            <div>
                <Module dispatch={dispatch} />
                {Dev ? <Dev/> : ''}
                {children}
            </div>
        )
    }
    render() {
        let {reducers, middleware, autoDevTools} = this.props
        let createStoreWithMiddleware
        if(typeof(middleware) === 'undefined'){
            middleware = []
        }
        // 并返回一个包含兼容 API 的函数。
        let middlewareList = [
            thunk,
            ...middleware
        ]
        if(autoDevTools && this.props.isMock ){
            if(dev){
                createStoreWithMiddleware = compose(
                    //你要使用的中间件，放在前面
                    applyMiddleware(...middlewareList),
                    //必须的！启用带有monitors（监视显示）的DevTools
                    dev.instrument()
                )
            }
        }else{
            createStoreWithMiddleware = (
                //你要使用的中间件，放在前面
                applyMiddleware(...middlewareList)
            )
        }
        // 像使用 createStore() 一样使用它。
        let app = combineReducers({...reducers})
        let store = createStoreWithMiddleware(createStore)(app)
        this.dispatch = store.dispatch
        return (
            <Provider store={store}>{this.show(this.dispatch , dev)}</Provider>
        )
    }
}