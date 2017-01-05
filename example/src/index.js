import React from 'react'
import { render } from 'react-dom'
import { BindReact, DevTools } from '../../lib'
import Tools from '../../lib/Tools'
import App from './container.jsx'
import * as reducers from './reducer'
import createLogger from 'redux-logger'
const logger = createLogger()

render( <BindReact module={App} reducers={reducers} devTools={Tools} middleware={[logger]} >
    	<h1> 你好 </h1> 
    </BindReact>,
    document.getElementById('app')
)