import React from 'react'
import {render} from "react-dom"
import BindReact from '../../dist/gfs-redux-bind-react'
import App from './container.jsx'
import * as reducers from './reducer'
render(
    <BindReact Module={App} reducers={reducers} />,
    document.getElementById('app')
);