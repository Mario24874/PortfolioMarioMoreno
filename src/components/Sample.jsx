// Sample.jsx
import React, { useEffect, useState, useRef } from 'react';
import './Sample.css'; // Asegúrate de importar el archivo CSS

const Sample = () => {
    const [active, setActive] = useState(0);
    const itemsRef = useRef([]);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const lastPosition = 2; // Ajusta esto según la cantidad de items
    const firstPosition = 0;

    useEffect(() => {
        const setSlider = () => {
            let oldActive = document.querySelector('.sample .list .item.active');
            if (oldActive) oldActive.classList.remove('active');
            itemsRef.current[active].classList.add('active');

            nextBtnRef.current.classList.remove('d-none');
            prevBtnRef.current.classList.remove('d-none');
            if (active === lastPosition) nextBtnRef.current.classList.add('d-none');
            if (active === firstPosition) prevBtnRef.current.classList.add('d-none');
        };

        const setDiameter = () => {
            let slider = document.querySelector('.sample');
            let widthSlider = slider.offsetWidth;
            let heightSlider = slider.offsetHeight;
            let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
            document.documentElement.style.setProperty('--diameter', `${diameter}px`);
        };

        setSlider();
        setDiameter();

        window.addEventListener('resize', setDiameter);

        return () => {
            window.removeEventListener('resize', setDiameter);
        };
    }, [active, lastPosition, firstPosition]);

    const handleNext = () => {
        setActive(active + 1);
    };

    const handlePrev = () => {
        setActive(active - 1);
    };

    return (
        <div className="sample">
            <div className="header">
                <figure className="logo">
                    <img src="/images/Logo_Mario_Moreno-SF.png" alt="" />
                </figure>
            </div>
            <div className="list">
                <div ref={el => itemsRef.current[0] = el} className={`item ${active === 0 ? 'active' : ''}`}>
                    <div className="image" style={{ '--url': "url('/images/J59.gif')" }}></div>
                    <div className="content">
                        <h2>MODERN ADAPTIVE DISIGN</h2>
                        <p>Your space must be eye-catching, current and integrate your ideas.</p>
                        <p>...It can also be something retro or classic that still stands out.</p>
                    </div>
                </div>
                <div ref={el => itemsRef.current[1] = el} className={`item ${active === 1 ? 'active' : ''}`}>
                    <div className="image" style={{ '--url': "url('/images/clearsky8.gif')" }}></div>
                    <div className="content">
                        <h2>FUNCTIONAL INTUITIVE SIMPLE</h2>
                    </div>
                </div>
                <div ref={el => itemsRef.current[2] = el} className={`item ${active === 2 ? 'active' : ''}`}>
                    <div className="image" style={{ '--url': "url('/images/tunel.jpeg')" }}></div>
                    <div className="content">
                        <h2>VISION OF THE FUTURE</h2>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button ref={prevBtnRef} id="prev" onClick={handlePrev}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4l4 4"/>
                    </svg>
                </button>
                <button ref={nextBtnRef} id="next" onClick={handleNext}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0l-4 4m4-4l-4-4"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Sample;