import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import image1 from '/13280-NOWKBG.jpg';
import image2 from '/8932789.jpg';
import image3 from '/plant-growing-coins-glass-jar.jpg';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [image1, image2, image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 20000); // Change image every 20 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Zoom Animation and Blend Effect */}
            <div
                key={currentImage} // Force re-render on image change
                className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    animation: 'zoom 40s linear infinite', // Linear for smooth animation
                    backgroundBlendMode: 'overlay', // Add blend mode
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add a color to blend with
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <Outlet />
            </div>

            {/* Inline Styles for Animation */}
            <style>
                {`
                    @keyframes zoom {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.5); }
                        100% { transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
};

export default MainLayout;