import React from 'react';
import { useContext} from 'react';
import {SliderData} from './SliderData';
import {GlobalContext} from '../Navbar';
import ImageSliderCss from './ImageSlider.css';

export default function ImageSlider() {

    const {current, setCurrent} = useContext(GlobalContext);

    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === (length - 1) ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent((current === 0) ? length - 1 : current - 1);
    };

    console.log(current);

    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <i className="fas fa-arrow-circle-left arrowButtonLeft" onClick={prevSlide}></i>
            <i className="fas fa-arrow-circle-right arrowButtonRight" onClick={nextSlide}></i>
            {SliderData.map((slide, index) => { 
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
