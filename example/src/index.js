import React from 'react'
import ReactDOM from 'react-dom'
import { BindReact, DevTools } from '../../lib'
import Tools from '../../lib/Tools'
import App from './container.jsx'
import * as reducers from './reducer'
import createLogger from 'redux-logger'
const logger = createLogger()
//demo ，目前有问题,后续修复
let Com = BindReact.getComponent()
ReactDOM.render( <Com module={App} reducers={reducers} devTools={Tools} middleware={[logger]} >
    	<h1> 你好 </h1> 
    </Com>,
    document.getElementById('app')
)