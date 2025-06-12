import React, { useRef, useState, useEffect } from "react";
import './style.css'
import image1 from "../../assets/whitecar.jpg";

const rideData = [
    {
        title: "Wait & Save",
        image: image1,
        features: ["💲 Budget-friendly", "👤 Private"]

    },

    {
        title: "Lyft",
        image: image1,
        features: ["⚡ Efficient", "👤 Private"]

    },

    {
        title: "Bikes & Scooters",
        image: image1,
        features: ["⚡ Efficient", "👤 Private"]
    },

    {
        title: "Shared Ride",
        image: image1,
        features: ["💲 Affordable", "👥 Shared"]
    },
    {
        title: "Lux",
        image: image1,
        features: ["⭐ Luxury", "👤 Private"]
    },
    {
        title: "XL",
        image: image1,
        features: ["⭐ Luxury", "👤 Private"]
    }
];



const RideOptions = () => {
    const scrollRef = useRef();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const scroll = scrollRef.current;
        if (scroll) {
            setCanScrollLeft(scroll.scrollLeft > 0);
            setCanScrollRight(scroll.scrollLeft + scroll.offsetWidth < scroll.scrollWidth);
        }
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 260;
        if (direction === "left") current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        else current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        checkScroll();
        const current = scrollRef.current;
        current.addEventListener('scroll', checkScroll);
        return () => current.removeEventListener('scroll', checkScroll);
    }, []);


    return (
        <section className="ride-options">
            <div className="ride-main">
                <div className="main-text">
                    <div className="text-content">
                        <h2>Rides you can count on</h2>
                        <p>We’ve got options to get you where you’re going. Choose a ride that suits your mood and budget.*</p>
                    </div>


                    <div className="scroll-buttons">
                        <button onClick={() => scroll("left")} className={canScrollLeft ? 'active' : ''} disabled={!canScrollLeft}>&larr;</button>
                        <button onClick={() => scroll("right")} className={canScrollRight ? 'active' : ''} disabled={!canScrollRight}>&rarr;</button>
                    </div>
                </div>


                <div className="ride-cards-container" ref={scrollRef}>
                    {rideData.map((ride, index) => (
                        <div className="ride-card" key={index}>
                            <h3>{ride.title}</h3>
                            <img src={ride.image} alt={ride.title} />
                            <div className="features">
                                {ride.features.map((feature, i) => (
                                    <p key={i}>{feature}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="note">
                    *Availability of bikes, scooters, and ride types varies by region.
                </p>
            </div >
        </section >
    );
};


export default RideOptions;