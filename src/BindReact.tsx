import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
interface Props {
    reducers: any;
    middleware?: Array<any>;
    devTools?: any;
    module: any;
}
export default class BindReact extends React.Component<Props, {}> {
    dispatch: any;
    renderChildren(props) {
        return React.Children.map(props.children, (child:any) => {
            return React.cloneElement(child, {...props, ...props.reducers})
        })
    }
    show(dispatch, Dev){
        const Module = this.props.module
        return (
            <div>
                <Module dispatch={dispatch} />
                {Dev ? <Dev /> : ''}
                {this.renderChildren(this.props)}
            </div>
        )
    }
    render() {
        let {reducers, middleware = [], devTools} = this.props
        let createStoreWithMiddleware
        // return a function contain compatible API
        let middlewareList = [
            thunk,
            ...middleware
        ]
        if(devTools){
            createStoreWithMiddleware = compose(
                // add middleware ahead
                applyMiddleware(...middlewareList),
                // start dev-tools
                devTools.instrument()
            )
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
            <Provider store={store}>{this.show(this.dispatch, devTools)}</Provider>
        )
    }
}