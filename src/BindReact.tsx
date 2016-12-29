import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dev from  './DevTools'

interface Props {
    reducers: any;
    middleware: Array<any>;
    autoDevTools: boolean;
    isMock: boolean;
    Module: any;
}

export default class BindReact extends React.Component<Props, {}> {
    dispatch: any;
    static defaultProps = {
        autoDevTools: false,
        isMock: false
    }
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
        let {reducers, middleware = [], autoDevTools, isMock} = this.props
        let createStoreWithMiddleware
        // return a function contain compatible API
        let middlewareList = [
            thunk,
            ...middleware
        ]
        if(autoDevTools && isMock ){
            if(dev){
                createStoreWithMiddleware = compose(
                    // add middleware ahead
                    applyMiddleware(...middlewareList),
                    // start dev-tools
                    dev.instrument()
                )
            }
        }else{
            createStoreWithMiddleware = (
                applyMiddleware(...middlewareList)
            )
        }
        // just use like as createStore()
        let app = combineReducers({...reducers})
        let store = createStoreWithMiddleware(createStore)(app)
        // add dispatch attribute to window
        window['dispatch'] = this.dispatch = store.dispatch
        return (
            <Provider store={store}>{this.show(this.dispatch , dev)}</Provider>
        )
    }
}