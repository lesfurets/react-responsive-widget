# ReactJs - Responsive Widget

React Respinsive App is a responsive container for [React](https://facebook.github.io/react/).

It provides a container that makes it easy to design responsive widgets in react that will scale depending on the container size.
This container allow you to use a grid layout system similar to [bootstrap](https://v4-alpha.getbootstrap.com/layout/grid/), that will have breakpoints depending on the container size (instead of the viewport).
 
## Install
To install if with [npm](https://www.npmjs.com/): 
```bash
$ npm install --save react-responsive-widget
```  

If you are using a bundler that support ES2015 modules you can import it with :
For a code using a module bundler to support ES2015 : 
```bash
import ResponsiveContainer from 'react-responsive-widget'
```

If you want to use it with common js :
```bash
var ResponsiveContainer = require('react-responsive-widget')
```

Then with a module bundler like webpack that supports either CommonJS or ES2015 modules, use as with bootstrap grid syntax prefixed with app-*:
```js
import React from "react";
import ResponsiveContainer from "react-responsive-widget";

export default class App extends React.Component {
    render() {
        return (
            <ResponsiveContainer>
              <div className="app-row">
                <div className="app-col-xs-12 app-col-sm-8 app-col-md-4 app-col-lg-2">
                    Hello World !
                </div>
              </div>
            </ResponsiveContainer>
        )
    }
}
```