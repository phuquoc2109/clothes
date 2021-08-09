import React from 'react'
import '../styles/main.css'
import Slider from '../components/Slider'
import heroSliderData from '../assets/fake-data/hero-slider'

export default function Main() {

    return (
        <div className="main">
            <Slider
            data = {heroSliderData}
            control={true}
            timeOut={3000}
            auto={true}
            />
        </div>
    )
}
