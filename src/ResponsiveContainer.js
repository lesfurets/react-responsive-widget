import React from "react";
import PropTypes from 'prop-types';
import ReactDom from "react-dom";
import "../styles/responsive-grid.scss";

const XS = "app-xs";
const SM = "app-sm";
const MD = "app-md";
const LG = "app-lg";
const XL = "app-xl";

let getFormat = (element) => {
    let elementWidth = ReactDom.findDOMNode(element).offsetWidth;
    console.log(elementWidth);
    if (elementWidth >= element.props.xl) {
        return XL;
    } else if (elementWidth >= element.props.lg) {
        return LG;
    } else if (elementWidth >= element.props.md) {
        return MD;
    } else if (elementWidth >= element.props.sm) {
        return SM;
    }
    return XS;
};

export default class ResponsiveContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            format: XS
        };
        this.checkSize = this.checkSize.bind(this);
    }

    componentDidMount() {
        this.checkSize();
        if (window.attachEvent) { // IE
            window.attachEvent('onresize', this.checkSize);
        }
        else if (window.addEventListener) { // Common
            window.addEventListener('resize', this.checkSize, true);
        }
    }

    checkSize() {
        let format = getFormat(this);
        if (format !== this.state.format) {
            this.setState({format})
        }
    }

    render() {
        return (
            <div className="app-container">
                <div className={this.state.format}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ResponsiveContainer.propTypes = {
    xl: PropTypes.number,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number
};

ResponsiveContainer.defaultProps = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576
};