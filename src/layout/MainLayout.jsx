import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import image1 from '/13280-NOWKBG.jpg';
import image2 from '/8932789.jpg';
import image3 from '/plant-growing-coins-glass-jar.jpg';
import Pic from '../components/Pic';

const MainLayout = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [image1, image2, image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Zoom Animation */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    animation: 'zoom 10s infinite',
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                <Outlet />
                <Pic/>
            </div>

            {/* Inline Styles for Animation */}
            <style>
                {`
                    @keyframes zoom {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }
                `}
            </style>
        </div>
    );
};

export default MainLayout;