import React from "react";
import ReactDom from "react-dom";
import "../styles/responsive-grid.less";

const XS = "app-xs";
const SM = "app-sm";
const MD = "app-md";
const LG = "app-lg";

let getFormat = (element) => {
  let elementWidth = ReactDom.findDOMNode(element.refs.container).offsetWidth;
  if (elementWidth > element.props.lg) {
    return LG;
  } else if (elementWidth > element.props.md) {
    return MD;
  } else if (elementWidth > element.props.sm) {
    return SM;
  }
  return XS;
};

export default class ResponsiveContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      format: XS
    }
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
    if (format != this.state.format) {
      this.setState({format})
    }
  }

  render() {
    return (
      <div ref="container" className="app-container">
        <div className={this.state.format}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ResponsiveContainer.propTypes = {
  lg: React.PropTypes.number,
  md: React.PropTypes.number,
  sm: React.PropTypes.number
};

ResponsiveContainer.defaultProps = {
  lg: 1200,
  md: 992,
  sm: 768
};