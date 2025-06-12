// import React from "react";
import Button from "../../component/button"
import "./style.css";

function Hero() {
    return (
        <section className="hero">
            <img src="/src/assets/car.jpg" alt="image1" />

            <div className="hero-content">
                <h1>Let's ride</h1>
                <p>No matter where you’re headed, we’ll help you get there.<br />
                    On-demand, scheduled ahead, late night, or morning<br />
                    commute. Plus, get rewards on every ride.</p>
                <Button>Sign up to ride</Button>
            </div>
        </section>
    );
}
export default Hero;
