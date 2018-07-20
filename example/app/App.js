import React from "react";
import ResponsiveContainer from "../../src/ResponsiveContainer";
import "../styles/app.less";

class App extends React.Component {
    render() {
        return (
            <ResponsiveContainer>
                <div className="demo">
                    <div className="app-row">
                        <div className="app-col-6 app-col-md-3">
                            .app-col-6 .app-col-md-3
                        </div>
                        <div className="app-col-6 app-col-md-3">
                            .app-col-6 .app-col-md-3
                        </div>
                        <div className="app-col-6 app-col-md-3">
                            .app-col-6 .app-col-md-3
                        </div>
                        <div className="app-col-6 app-col-md-3">
                            .app-col-6 .app-col-md-3
                        </div>
                    </div>
                </div>
            </ResponsiveContainer>
        )
    }
}

export default App;