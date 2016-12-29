# gfs-redux-bind-react
bind react with redux 

## Usage
the `BindReact` component must have properties are `Module` and `reducers`
- `Module` is a `react` component
- `reducers` is a describe for action

the `isMock`, `autoDevTools`, `middleware` are optional
- `isMock` to set the data is `testing` or not
- `autoDevTools` to set the `DevTools` is displayed
- `middleware` add `react-redux` middleware for this component

the following is full demo to describe how to use this, the detail please clone the code and run command 
```bash
$ npm run test
```

```javascript
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

```
## Developer

```bash
#测试	
$ npm run test	
#打包	
$ npm run build	
#例子演示	
$ npm start
```


