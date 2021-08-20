import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCart } from '../slide/CartSlice';
import numberWidthCommas from '../utils/NumberWithCommas';
import { SectionTitle } from './Section';

export default function AccessoryView({accessory}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [selectImageColor, setSelectImageColor] = useState(accessory.image);


    useEffect(() => {
        setSelectImageColor(accessory.image);
        setQuantity(1);
    },[accessory])

    const updateQuanity = (type) => {
        if(type === 'plus'){
            setQuantity(quantity +1 );
        }else{
            setQuantity(quantity-1 < 1 ? 1 : quantity -1 );
        } 
     }
     
    const initialCart = {
        id: undefined,
        title: accessory.title,
        img: selectImageColor,
        price: accessory.price,
        priceOld: accessory.priceOld,
        quantity: quantity
    }

    const handleAddCart = () => {
        const idRandom = Math.random();
        initialCart.id = idRandom
        const action = addCart(initialCart);
        dispatch(action);
        toast.success('Thêm vào giỏ hàng thành công');
    }

    const goToCart = () => {
            const idRandom = Math.random();
            initialCart.id = idRandom;
            const action = addCart(initialCart);
            dispatch(action);
            history.push('/cart');    
    }

    toast.configure();
    return (
        <div className="accessory" >
            <div className="accessoryView">
                <div className="accessoryView__image">
                    <img src={selectImageColor ? selectImageColor : accessory.image} alt="" />
                </div>
                <div className="accessoryView__info">
                    <div className="accessoryView__info__title">{accessory.title}</div>
                    <div className="accessoryView__info__price">{numberWidthCommas(accessory.price)} VNĐ</div>
                    <del className="accessoryView__info__priceOld">{numberWidthCommas(accessory.priceOld)} VNĐ</del>
                    <div className="accessoryView__info__color">Màu sắc</div>
                    <div className="accessoryView__info__imagecolor">
                    {
                        accessory.imageList.map(item =>(
                            <div>
                                <img 
                                onClick={() => setSelectImageColor(item)}
                                className={selectImageColor === item ? 'active' : ''}
                                src={item} alt="" 
                                />
                            </ div>
                        ))
                    }
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Số lượng
                        </div>
                        <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn"
                        onClick={() => updateQuanity('minus')}>
                                <i className="far fa-minus-square"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                            <div className="product__info__item__quantity__input__bg"></div>
                        </div>
                        
                        <div className="product__info__item__quantity__btn"
                        onClick={() => updateQuanity('plus')}>
                                <i className="far fa-plus-square"></i>
                        </div>
                        </div>
                    </div>
                    <div className="product__info__item">
                        <Button onClick={handleAddCart} style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Thêm vào giỏ</Button>
                        <Button onClick={goToCart}  style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Mua ngay</Button>
                    </div>
                    <div className="accessoryView__info__contact">
                        <div className="accessoryView__info__contact__sp" ><i class="fas fa-hand-point-right"></i> BẢO HÀNH SẢN PHẨM 90 NGÀY</div><br/>
                        <div className="accessoryView__info__contact__sp"><i class="fas fa-hand-point-right"></i> ĐỔI HÀNG TRONG VÒNG 30 NGÀY</div><br/>
                        <div className="accessoryView__info__contact__sp"><i class="fas fa-hand-point-right"></i> HOTLINE BÁN HÀNG 0916 904 140</div>
                    </div>
                </div>
            </div>
            <div className="accessoryDes">
                <SectionTitle>Mô tả</SectionTitle>
                <img src={accessory.imageBanner} alt="" />
            </div>
        </div>
    )
}
