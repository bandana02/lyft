import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <section className="footer-main">
            <div className="footer-head">
                <div className="footer-list">
                    <a style={{ marginBottom: '20px', fontWeight: '900' }} href='#'>DRIVER</a>
                    <a href='#'>Become a Driver</a>
                    <a href='#'>New Driver Guide</a>
                    <a href='#'>Earnings</a>
                    <a href='#'>Cities</a>
                    <a href='#'>Help</a>
                    <a href='#'>Safety</a>
                    <a href='#'>Application</a>
                    <a href='#'>Requirements</a>
                    <a href='#'>Exess Drive</a>
                    <a href='#'>Bonus</a>
                    <a href='#'>Lyft Rewards</a>
                    <a href='#'>Go Electric</a>
                    <a href='#'>Insurance</a>
                    <a href='#'>Black Car Fleets</a>
                    <a href='#'>Driver Blog</a>
                    <a href='#'>Beta Program</a>
                </div>
                <div className="footer-list">
                    <a style={{ marginBottom: '20px', fontWeight: '900' }} href='#'>RIDER</a>
                    <a href='#'>Sign up to ride</a>
                    <a href='#'>Lyft Pink</a>
                    <a href='#'>Cities</a>
                    <a href='#'>Help</a>
                    <a href='#'>Business Profile</a>
                    <a href='#'>Rewards</a>
                    <a href='#'>Events</a>
                    <a href='#'>Airports</a>
                    <a href='#'>Gift Cards</a>
                    <a href='#'>Lyft Family</a>
                    <a href='#'>Shuttles & Buses</a>
                    <a href='#'>Donate</a>
                </div>
                <div className="footer-list">
                    <a style={{ marginBottom: '20px', fontWeight: '900' }} href='#'>LYFT</a>
                    <a href='#'>Creers</a>
                    <a href='#'>Lyft Up</a>
                    <a href='#'>Business</a>
                    <a href='#'>Healthcare</a>
                    <a href='#'>Bikes</a>
                    <a href='#'>Scooters</a>
                    <a href='#'>Autonomous</a>
                    <a href='#'>Lyft Media</a>
                    <a href='#'>Venue</a>
                    <a href='#'>Partnerships</a>
                    <a href='#'>Developers</a>
                    <a href='#'>Newsroom</a>
                    <a href='#'>Press</a>
                    <a href='#'>Investor Relations</a>

                </div>
                <div className="footer-list">
                    <div className="buttons">
                        <button className="footer-btnone">
                            Lyft driver app
                        </button>
                        <button className="footer-btntwo">
                            Lyft rider app
                        </button>
                    </div>

                </div>
                <div className="footer-list">
                    <b><a href='#'>🌎 EN</a></b>
                </div>
            </div>

            <center>
                <div className="footer-base">
                    <a href='#'>Terms</a>
                    <a href='#'>Privacy</a>
                    <a href='#'>Accessibility Statement</a>
                    <a href='#'>Your Privacy Choices</a>
                    <a href='#'>© 2025 Lyft, Inc.</a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaInstagram /></a>
                </div>
            </center>
        </section>
    )
}
export default Footer;