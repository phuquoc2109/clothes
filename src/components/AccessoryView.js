import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import numberWidthCommas from '../utils/NumberWithCommas';
import { SectionTitle } from './Section';

export default function AccessoryView({accessory}) {

    const [quantity, setQuantity] = useState(1)

    const updateQuanity = (type) => {
        if(type === 'plus'){
            setQuantity(quantity +1 );
        }else{
            setQuantity(quantity-1 < 1 ? 1 : quantity -1 );
        } 
     }

    return (
        <div className="accessory" >
            <div className="accessoryView">
                <div className="accessoryView__image">
                    <img src={accessory.image} alt="" />
                </div>
                <div className="accessoryView__info">
                    <div className="accessoryView__info__title">{accessory.title}</div>
                    <div className="accessoryView__info__price">{numberWidthCommas(accessory.price)} VNĐ</div>
                    <div className="accessoryView__info__imagecolor">
                    {
                        accessory.imageList.map(item =>(
                            <>
                                <img src={item} alt="" />
                            </>
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
                        <Button  style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Thêm vào giỏ</Button>
                        <Button  style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Mua ngay</Button>
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
