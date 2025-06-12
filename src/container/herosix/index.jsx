import "./style.css";


function Herosix() {
    return (
        <section className="herosix-main">
            <img src="/src/assets/pinkhome.jpg" alt="pinkhome" />

            <div className="herosix-content">
                <h1>Your safety's first. Always.</h1>
                <p>Protecting riders and drivers is priority number one.
                    That’s why we have a rigorous vetting process for
                    drivers, strict community standards, and more.</p>

                <div className="buttons">
                    <button className="button-one">Learn more</button>
                    <button className="button-two">Community guidelines → </button>
                </div>

            </div>
        </section>
    )
};

export default Herosix;
