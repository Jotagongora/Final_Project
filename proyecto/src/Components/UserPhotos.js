import React, {useContext} from 'react'
import {SliderData} from './SliderData';
import {useHistory} from 'react-router-dom';
import {GlobalContext} from '../Navbar';

export default function UserPhotos() {

    const {setCurrent} = useContext(GlobalContext);

    let history = useHistory();

    function handleClick(index) {
        return () => {
            history.push(`/User/Slider`);
            setCurrent(index)
        }   
    }

    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                       <div className="gridPhotosContainer">
                       {SliderData.map((slide, index) => { 
                        return (
                            <div onClick={handleClick(index)} className="photos" style={{backgroundImage: `url(${slide.image})`}}></div>
                            )
                        })}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
