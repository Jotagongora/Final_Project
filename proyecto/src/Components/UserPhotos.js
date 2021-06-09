import React from 'react'
import {SliderData} from './SliderData';
import {useHistory} from 'react-router-dom';

export default function UserPhotos() {

    let history = useHistory();

    function handleclick() {
        history.push(`/User/Slider`)
    }

    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                       <div className="gridPhotosContainer">
                       {SliderData.map((slide, index) => { 
                        return (
                            <div /*onClick={handleclick}*/ className="photos" style={{backgroundImage: `url(${slide.image})`}}></div>
                            )
                        })}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
