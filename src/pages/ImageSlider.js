import React from 'react';
import { useContext} from 'react';
import {SliderData} from '../Data/SliderData';
import {GlobalContext} from '../Navbar';
import ImageSliderCss from './ImageSlider.css';
import {useAuthContext} from '../contexts/AuthContext';

export default function ImageSlider() {

    const {current, setCurrent} = useContext(GlobalContext);

    const {photos} = useAuthContext();

    const length = photos.length;

    const nextSlide = () => {
        setCurrent(current === (length - 1) ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent((current === 0) ? length - 1 : current - 1);
    };

    console.log(current);

    if(!Array.isArray(photos) || photos.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <i className="fas fa-arrow-circle-left arrowButtonLeft" onClick={prevSlide}></i>
            <i className="fas fa-arrow-circle-right arrowButtonRight" onClick={nextSlide}></i>
            {photos.map((slide, index) => { 
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (
                            <div className="sliderImg" style={{backgroundImage: `url(${slide.image})`}}></div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}
