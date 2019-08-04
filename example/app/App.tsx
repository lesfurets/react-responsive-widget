import * as React from "react";
import {ResponsiveContainer} from "../../src/ResponsiveContainer";

import "../styles/app.scss";

const MIN_WIDTH = 500;
const START_WIDTH = 800;
const MAX_WIDTH = 1300;
const STEP = 100;

const XS = {label: "xs", value: 0};
const SM = {label: "sm", value: 576};
const MD = {label: "md", value: 768};
const LG = {label: "lg", value: 992};
const XL = {label: "xl", value: 1200};

const getCurrentBreakpoint = (width: number) => {
    if (width >= XL.value) {
        return XL.label;
    } else if (width >= LG.value) {
        return LG.label;
    } else if (width >= MD.value) {
        return MD.label;
    } else if (width >= SM.value) {
        return SM.label;
    }
    return XS.label;
}

export const App: React.FunctionComponent = () => {
    const [width, setWidth] = React.useState(START_WIDTH);
    const [currentBreakpoint, setCurrentBreakpoint] = React.useState(MD.label);


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(parseInt(event.target.value));
        setCurrentBreakpoint(getCurrentBreakpoint(parseInt(event.target.value)));
    };

    React.useEffect(() => {
        window.dispatchEvent(new Event('resize'))
    },[width, currentBreakpoint]);

    return (
        <div className="Demo">
            <div className="Demo-slider">
                <input type="range"
                       id="ContainerWidthRange"
                       name="ContainerWidthRange"
                       min={MIN_WIDTH}
                       max={MAX_WIDTH}
                       step={STEP}
                       value={width}
                       onChange={handleOnChange}/>
                <div className="Demo-currentBreakpoint">
                    Current breakpoint is <strong>{currentBreakpoint}</strong> ({width}px)
                </div>
            </div>
            <div className={"Demo-container"} style={{width: width + 'px'}}>
                <ResponsiveContainer>
                    <div className="Demo-item grid">
                        <div className="Demo-title">Grid</div>
                        <hr/>
                        <div className="Demo-content">
                            <div className="app-row">
                                <div className="app-col-sm">
                                    .app-col-sm
                                </div>
                                <div className="app-col-sm">
                                    .app-col-sm
                                </div>
                                <div className="app-col-sm">
                                    .app-col-sm
                                </div>
                            </div>
                        </div>
                        <div className="Demo-content">
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
                    </div>
                    <div className="Demo-item offset">
                        <div className="Demo-title">Offset</div>
                        <hr/>
                        <div className="Demo-content">
                            <div className="app-row">
                                <div className="app-col-4 app-offset-md-4 app-offset-lg-8">
                                    .app-col-4 .app-offset-md-4 .app-offset-lg-4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Demo-item order">
                        <div className="Demo-title">Order</div>
                        <hr/>
                        <div className="Demo-content">
                            <div className="app-row">
                                <div className="app-col app-order-lg-2">
                                    .app-col .app-order-lg-2
                                </div>
                                <div className="app-col app-order-lg-3"
                                     style={{backgroundColor: '#E1D5D3'}}>
                                    .app-col .app-order-lg-3
                                </div>
                                <div className="app-col app-order-lg-1"
                                     style={{backgroundColor: '#E8B5DA'}}>
                                    .app-col .app-order-lg-1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Demo-item direction">
                        <div className="Demo-title">Direction</div>
                        <hr/>
                        <div className="Demo-error">There is a bug for flex-column for grid items (caused by flex-basis: 0)</div>
                        <div className="Demo-parentClasses">Parent classes : <code>"app-row app-flex-column app-flex-md-column-reverse app-flex-lg-row"</code></div>
                        <div className="Demo-content">
                            <div className="app-row app-flex-column app-flex-md-column-reverse app-flex-lg-row">
                                <div className="app-col">
                                    <div>.app-col item-1</div>
                                </div>
                                <div className="app-col">
                                    <div>.app-col item-2</div>
                                </div>
                                <div className="app-col">
                                    <div>.app-col item-3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Demo-item display">
                        <div className="Demo-title">Display</div>
                        <hr/>
                        <div className="Demo-content">
                            <div className="app-row">
                                <div className="app-col-6">
                                    .app-col-6
                                </div>
                                <div className="app-col-6 app-d-md-none app-d-lg-block">
                                    .app-col-6 .app-d-md-none .app-d-lg-block
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Demo-item alignment horizontal">
                        <div className="Demo-title">Alignment - horizontal</div>
                        <hr/>
                        <div className="Demo-parentClasses">Parent classes : <code>"app-row app-justify-content-center app-justify-content-md-between"</code></div>
                        <div className="Demo-content">
                            <div className="app-row app-justify-content-center app-justify-content-md-between">
                                <div className="app-col-3">
                                    .app-col-3
                                </div>
                                <div className="app-col-3">
                                    .app-col-3
                                </div>
                            </div>
                        </div>
                        <div className="Demo-parentClasses">Parent classes : <code>"app-row app-justify-content-between app-justify-content-md-center"</code></div>
                        <div className="Demo-content">
                            <div className="app-row app-justify-content-between app-justify-content-md-center">
                                <div className="app-col-3">
                                    .app-col-3
                                </div>
                                <div className="app-col-3 ">
                                    .app-col-3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Demo-item alignment vertical">
                        <div className="Demo-title">Alignment - vertical</div>
                        <hr/>
                        <div className="Demo-parentClasses">Parent classes : <code>"app-row app-align-items-start app-align-items-sm-center app-align-items-lg-end"</code></div>
                        <div className="Demo-content">
                            <div
                                className="app-row app-align-items-start app-align-items-sm-center app-align-items-lg-end">
                                <div className="app-col">
                                    .app-col
                                </div>
                                <div className="app-col">
                                    .app-col
                                </div>
                                <div className="app-col">
                                    .app-col
                                </div>
                            </div>
                        </div>
                        <div className="Demo-content">
                            <div className="app-row">
                                <div className="app-col app-align-self-start">
                                    .app-col .app-align-self-start
                                </div>
                                <div className="app-col app-align-self-center">
                                    .app-col .app-align-self-center
                                </div>
                                <div className="app-col app-align-self-end">
                                    .app-col .app-align-self-end
                                </div>
                            </div>
                        </div>
                    </div>
                </ResponsiveContainer>
            </div>
        </div>
    )
};