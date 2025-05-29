// import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <img src="/src/assets/car.jpg" alt="image" />

            <div className="hero-content">
                <h1>Let's ride</h1>
                <p>No matter where you’re headed, we’ll help you get there. On-demand,
                    scheduled ahead, late night, or morning commute. Plus, get rewards on
                    every ride.</p>
                <button>Sign up to ride</button>
            </div>
        </section>
    );
}
export default Hero;
