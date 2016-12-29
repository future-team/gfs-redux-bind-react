import React from 'react'
import {render} from 'react-dom'
import BindReact from '../../lib/'
import App from './container.jsx'
import * as reducers from './reducer'
import Loading from './loading.jsx'
import createLogger from 'redux-logger'

const logger = createLogger()
render(
    <BindReact Module={App} reducers={reducers} isMock={false} autoDevTools={false} middleware={[logger]}>
        <Loading/>
    </BindReact>,
    document.getElementById('app')
)