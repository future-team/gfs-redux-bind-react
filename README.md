# gfs-redux-bind-react
bind react with redux 

## Usage
the `BindReact` component must have properties are `module` and `reducers`
- `module` is a `react` component
- `reducers` is a describe for action, normally it have a `fetching` props

the `devTools`, `middleware` are optional
- `devTools` to set the react-dev-tools
- `middleware` add `react-redux` middleware for this component

the following is full demo to describe how to use this, the detail please clone the code and run command 
```bash
$ npm run test
```

```javascript
import React, { Component ,PropTypes} from 'react';
import {render} from "react-dom";
import {BindReact, DevTools} from 'gfs-redux-bind-react'
import App from './container.jsx'
import * as reducers from '../reducers/index.es6';
import {LoadingBarComponent, Connect} from 'gfs-loadingbar/lib/index.react'
import {fetching} from 'gfs-loadingbar/lib/react/fetching'
import FetchMiddleware from 'gfs-loadingbar/lib/react/FetchMiddleware'
import createLogger from 'redux-logger'
const logger = createLogger()

//判断执行dev环境
render(
    <BindReact module={App} reducers={{...reducers, fetching}} middleware={[FetchMiddleware, logger]}>
        <Connect>
            <LoadingBarComponent />
        </Connect>
    </BindReact>,
    document.getElementById('root')
);
```
## Developer

```bash
# test	
$ npm run test	
# build	
$ npm run build	
# run demo	
$ npm start
```


