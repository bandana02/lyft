import './style.css';

function Herofour() {
    return (
        <section className="herofour">
            <div className="herofour-main">
                <div className="herofour-image">
                    <img src="/src/assets/pink.jpg" alt="pink" />
                </div>
                <div className="herofour-content">
                    <h1>We’re rolling out the red carpet</h1>
                    <p>Join the new Lyft Pink to enjoy complimentary upgrades to Priority
                        Pickup, exclusive savings, and preferential pricing on Lux, XL, and
                        Preferred rides. Members save an average of $23/month.</p>

                    <ul className="list-items">
                        <li className="listfour-one">⚡ Free Priority Pickup upgrades</li>
                        <p> Get picked up faster and save $3-4 per ride on average</p>
                        <li className="listfour-two">💸 Exclusive savings</li>
                        <p> Enjoy 5% off on Extra Comfort and Lyft XL rides</p>
                        <li className="listthree">✅ Cancellation forgiveness</li>
                        <p> Cancel up to 3x/month for free</p>
                        <li className="listfour">🍔 Free Grubhub+ for a year</li>
                        <p> $0 restaurant delivery fees</p>
                    </ul>


                    <button className="button-main">Join now</button>

                    <p className="terms">
                        Subject to the <a href="#">Lyft Pink Terms & Conditions</a> and <a href="#">Lyft Terms of Service</a>.
                    </p>


                </div>
            </div>
        </section>

    );
}

export default Herofour;