import './style.css';

function Herolast() {
    return (
        <section className="herolast-main">
            <div className="herolast-container">

                <div className="herolast-content">
                    <h1>Download the apps and get going!</h1>

                    <div className="image-section">
                        <div className="qr1">
                            <img src="src/assets/qr1.jpg" alt="qr1" />
                            <p>Scan the QR code to download.</p>
                            <button>Download the rider app → </button>
                        </div>



                        <div className="image-last">
                            <img src="src/assets/qr2.jpg" alt="qr2" />
                            <p>Scan the QR code to download.</p>
                            <button>Download the driver app → </button>
                        </div>
                    </div>

                </div>
            </div>


        </section >
    );

};
export default Herolast;