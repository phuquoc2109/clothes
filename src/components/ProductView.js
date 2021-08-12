import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/product.css';
import numberWidthCommas from '../utils/NumberWithCommas';

export default function ProductView(props) {
    const history = useHistory();
    const {product} = props;
    const initImage = product.image01;
    const [previewImg, setPreviewImg] = useState(initImage);

    const [imageActive1, setImageActive1] = useState(false)
    const [imageActive2, setImageActive2] = useState(false)

    const [descriptionExpand, setDescriptionExpend] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1)

    const updateQuanity = (type) => {
       if(type === 'plus'){
           setQuantity(quantity +1 );
       }else{
           setQuantity(quantity-1 < 1 ? 1 : quantity -1 );
       } 
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
        setImageActive1(false)
        setImageActive2(false)
    },[product])

    const check = () => {
        if (color === undefined){
            toast.error('Vui lòng chọn màu sắc!!!');
            return false;
        }
        if (size === undefined){
            toast.error('Vui lòng chọn size!!!');
            return false
        }
        return true
    }

    const addToCart = () =>{
        if(check()){
            toast.success('Thêm vào giỏ hàng thành công')
            console.log({size, color, quantity})
        }
       
    }
    const goToCart = () => {
        if(check()){
            toast.success('Mua luôn')
            history.push('/cart')
        }
        
    }

    toast.configure();
    return (
        <div className="product">
            <div className="product__image">
                <div className="product__image__list">
                    <div className={`product__image__list__item ${imageActive1 ? 'activeimage' : ''}`} onClick={() => {setPreviewImg(product.image01); setImageActive1(true); setImageActive2(false)}}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className={`product__image__list__item ${imageActive2 ? 'activeimage' : ''}`}  onClick={() => {setPreviewImg(product.image02);setImageActive2(true); setImageActive1(false)}}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__image__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html:
                    product.description}}> 
                    </div>
                    <div className="product-description__toggle">
                        <Button onClick={() => {setDescriptionExpend(!descriptionExpand)}} size="small" variant="contained" color="primary">
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h2 className="product__info__title">{product.title}</h2>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWidthCommas(product.price)}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item,index) => (
                                <div 
                                key={index} 
                                className={`product__info__item__list__item
                                ${color === item ? 'active' : ''}`}
                                onClick={() => setColor(item)}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích cỡ
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item,index) => (
                                <div 
                                key={index} 
                                className=
                                {`product__info__item__list__item 
                                ${size === item ? 'active' : ''}`} 
                                onClick={() => setSize(item)}
                                >
                                    <div className="product__info__item__list__item__size">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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
                    <Button onClick={() => addToCart()} style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Thêm vào giỏ</Button>
                    <Button onClick={() => goToCart()} style={{margin:'0px 10px 10px 0px'}} variant="contained" color="primary">Mua ngay</Button>
                </div>
            </div>
        </div>
    )
}
