import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
interface Props {
    reducers: any;
    middleware?: Array<any>;
    devTools?: any;
    module: any;
    initialState:any;
    moduleProps:any;
    stories:any;
    isServerRender:Boolean;
}
class BindReact extends React.Component<Props, {}> {
    dispatch: any;
    store:any;
    show(dispatch, Dev){
        const Module = this.props.module
        
        return (
            <Module {...this.props.moduleProps} />
        )
        /*if(this.props.isServerRender){
            return (
                <Module {...this.props.moduleProps} />
            )
        }else{
            return (
                <div className='gfs-react-container'>
                    <Module {...this.props.moduleProps} />
                    {Dev ? <Dev /> : ''}
                    {this.props.children}
                </div>
            )
        }*/
        
    }
    render() {
        // add dispatch attribute to window
        let store = this.props.stories
        window['dispatch'] = this.dispatch = store.dispatch
        return (
            <Provider store={store}>{this.show(this.dispatch, this.props.devTools)}</Provider>
        )
    }
}

export default ()=>{
    return {
        bindStore:function(props:Props){
            let {reducers, middleware = [], devTools, initialState} = props
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
            let store
            if(initialState){
                store = createStoreWithMiddleware(createStore)(app,initialState )
            }else{
                store = createStoreWithMiddleware(createStore)(app )
            }
            return store
        },
        getComponent:function(){
            return BindReact
        }
    }
}