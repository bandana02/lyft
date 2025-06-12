import './style.css';


function Herofive() {
    return (
        <section className="herofive-container">
            <div className="herofive-main">
                <div className="herofive-content">
                    <h1>Accelerate your <br /> business</h1>
                    <p>Provide reliable rides for the people who matter to
                        your business. Whether it’s team members heading
                        into work or clients flying into town. </p>

                    <div className="buttons">
                        <button className="first">Get started today</button>
                        <button className="second">Explore solutions → </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/biz.jpg" alt="biz" />

                </div>

            </div>
        </section>
    );
};

export default Herofive;
