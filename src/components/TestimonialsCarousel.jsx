import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';

function TestimonialsCarousel() {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <>
            <div>
                {testimonials.length > 0 && (
                    <>
                        <p>{testimonials[currentIndex].testimonial}</p>
                        <p>{testimonials[currentIndex].name}</p>
                        <button onClick={prevTestimonial}>Previous</button>
                        <button onClick={nextTestimonial}>Next</button>
                    </>
                )}
            </div>
        </>
    )
}

export default TestimonialsCarousel;