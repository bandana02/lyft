import './style.css';
import Button from "../../component/button"
function Herotwo() {
    return (
        <section className="herotwo-main">
            <div className="container">
                <div className="content">
                    <h1>Drive and earn your <br />way</h1>
                    <p>With Lyft, you can be your own boss, set your own
                        schedule, and drive when it makes sense for you.
                        You keep 100% of your tips, and can cash out
                        instantly whenever you want.</p>

                    <div className="buttons">
                        <Button >Apply to drive</Button>
                        <button className="secondary">Learn more about <br /> earnings &nbsp; →</button>
                    </div>
                </div>

                <div className="image">
                    <img src="/src/assets/driver.jpg" alt="driver" />

                </div>
            </div>

        </section >
    );
}

export default Herotwo;