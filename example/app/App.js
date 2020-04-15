import React from "react";
import ResponsiveContainer from "../../src/ResponsiveContainer";
import {DisplayCurrentBreakPoint} from "./DisplayCurrentBreakPoint";
import "../styles/app.less";

class App extends React.Component {
    render() {
        return (
            <ResponsiveContainer sm={768} md={992} lg={1200}>
                <DisplayCurrentBreakPoint/>
                <div className="demo">
                    <div className="app-row">
                        <div className="app-col-xs-6 app-col-md-3">
                            .app-col-xs-6 .app-col-md-3
                        </div>
                        <div className="app-col-xs-6 app-col-md-3">
                            .app-col-xs-6 .app-col-md-3
                        </div>
                        <div className="app-col-xs-6 app-col-md-3">
                            .app-col-xs-6 .app-col-md-3
                        </div>
                        <div className="app-col-xs-6 app-col-md-3">
                            .app-col-xs-6 .app-col-md-3
                        </div>
                    </div>
                </div>
            </ResponsiveContainer>
        )
    }
}

export default App;