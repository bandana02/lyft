import './Herothree.css';
function Herothree() {
    return (
        <section className="herothree-main">
            <div className="main-container">
                <div className="main-content">

                    <h4>Ready with lyft</h4>
                    <h1>Ready, set, go <br />
                        in just a few quick taps</h1>
                    <p>No matter your destination, we’ll get you where you need to <br /> go

                    </p>

                    <ul clssName="features">
                        <li className="list-one">✅ Get a reliable ride in minutes</li>
                        <li className="list-two">📅 Schedule your ride in advance</li>
                        <li className="list-three">🎁 Earn rewards on every ride</li>

                    </ul>
                    <div className="buttons">
                        <button className="btnone">Sign up to ride</button>
                        <button className="btntwo">Learn more about riding with lyft→</button>

                    </div>
                </div>
                <div className="right-image">
                    <img src="/src/assets/select.jpg" alt="select" />
                </div>

            </div>

        </section>

    );

}

export default Herothree;