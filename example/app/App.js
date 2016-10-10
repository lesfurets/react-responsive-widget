import React from "react";
import ResponsiveContainer from "../../src/ResponsiveContainer";
import "../styles/app.less"

class App extends React.Component {
    render() {
        return (
            <div id="main-element"> 
              <ResponsiveContainer sm={768}  md={992}  lg={1200} >
                <div className="app-row p-tb-L">
                  <div className="border app-col-xs-12 app-col-sm-8">.col-xs-12 .col-sm-8</div>
                  <div className="border app-col-xs-12 app-col-sm-4">.col-xs-12 .col-sm-4</div>
                </div>

                <div className="app-row p-tb-L">
                  <div className="border app-col-xs-6 app-col-md-3">.col-xs-6 .col-md-3</div>
                  <div className="border app-col-xs-6 app-col-md-3">.col-xs-6 .col-md-3</div>
                  <div className="border app-col-xs-6 app-col-md-3">.col-xs-6 .col-md-3</div>
                  <div className="border app-col-xs-6 app-col-md-3">.col-xs-6 .col-md-3</div>
                </div>

              </ResponsiveContainer>
            </div>
        )
    }
}

export default App;