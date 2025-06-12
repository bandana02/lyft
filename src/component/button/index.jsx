// import React from "react";
import "./styles.css";

function Hero({ children, ...props }) {
    return (

        <button className="button" {...props}>{children}</button>

    );
}
export default Hero;
