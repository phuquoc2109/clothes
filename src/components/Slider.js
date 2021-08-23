import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/slider.scss';
import Button from '@material-ui/core/Button'

const SliderItem = (props) => (
    <div className={`slider__item ${props.active ? 'active' : ''}`}>
        <div className="slider__item__info">
            <div className={`slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="slider__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="slider__item__info__btn">
                <Link to={props.item.path}> 
                    <Button variant="contained" color="primary"  >
                    <i className="fas fa-shopping-cart"></i>Xem chi tiết
                    </Button>         
                </Link>
            </div>
        </div>
        <div className="slider__item__image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="Ảnh có thể bị lỗi khi update" />
        </div>
    </div>
)

export default function Slider(props) {
    const {data, timeOut} = props;


    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index);
    }

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index);
    }

    useEffect(() => {
        if(props.auto){
            const slideAuto = setInterval(() => {
                nextSlide();
            },timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut]);

    return (
            <>
                <div className="slider">
                    {
                        data.map((item, index) => (
                            <SliderItem item={item} key={index} active={index === activeSlide} />
                        ))
                    }
                    {
                        props.control ? (
                            <div className="slider__control">
                                <div className="slider__control__item">
                                    <i onClick={prevSlide} className="fas fa-chevron-left"></i>
                                </div>
                                <div className="slider__control__item">
                                <div className="index">
                                    {activeSlide + 1}/{data.length}
                                </div>
                                </div>
                                <div onClick={nextSlide} className="slider__control__item">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </>
    )
}