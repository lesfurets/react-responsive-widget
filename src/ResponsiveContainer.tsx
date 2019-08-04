import * as React from "react";
import "../styles/responsive-container.scss";

const XS = "app-xs";
const SM = "app-sm";
const MD = "app-md";
const LG = "app-lg";
const XL = "app-xl";

let getFormat = (element: HTMLDivElement, sm: number,md: number,lg: number,xl: number) => {
    let elementWidth = element.offsetWidth;
    if (elementWidth >= xl) {
        return XL;
    } else if (elementWidth >= lg) {
        return LG;
    } else if (elementWidth >= md) {
        return MD;
    } else if (elementWidth >= sm) {
        return SM;
    }
    return XS;
};

export interface ResponsiveContainerProps {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
};

export const ResponsiveContainer: React.FunctionComponent<ResponsiveContainerProps> = ({sm,md,lg,xl,children}) => {
    const [format, setFormat] = React.useState(XS);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const formatRef = React.useRef<HTMLDivElement>(null);

    const checkSize = () => {
        let newFormat = getFormat(containerRef.current!, sm!, md!, lg!, xl!);
        if (newFormat !== formatRef.current!.className) {
            setFormat(newFormat);
        }
    };

    React.useEffect(() => {
        checkSize();
        if ((window as any).attachEvent) { // IE
            (window as any).attachEvent('onresize', checkSize);
        }
        else if (window.addEventListener) { // Common
            window.addEventListener('resize', checkSize, true);
        }
    },[]);

    return (
        <div className="app-container" ref={containerRef}>
            <div className={format} ref={formatRef}>
                {children}
            </div>
        </div>
    );
};

ResponsiveContainer.defaultProps = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576
};