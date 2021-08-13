import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { editQuantity, removeProduct } from '../slide/CartSlice';
import numberWidthCommas from '../utils/NumberWithCommas';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCart({item}) {
    const initQuanity = item.quantity;
    const [quantity, setQuantity] = useState(initQuanity)
    const dispatch = useDispatch();
    
    const updateQuanity = (type) => {
        if(type === 'plus'){
            const editquanity = quantity + 1;
            setQuantity(editquanity);
            const editItem = {...item, editquanity}
            const action = editQuantity(editItem);
            dispatch(action);
        }else{
            const editquanity = (quantity - 1) < 1 ? 1 : (quantity -1);
            setQuantity(editquanity);
            const editItem = {...item, editquanity}
            const action = editQuantity(editItem);
            dispatch(action);
        } 
    }

    const deleteProduct = () => {
        const idItem = item.id;
        const action = removeProduct(idItem);
        dispatch(action);
        toast.success("Đã xoá sản phẩm khỏi giỏ hàng")
    }
 
    toast.configure();
    return (
        <>
            <div className="cart__product__card">
                <img src={item.img} alt="" />
                <div className="cart__product__card__info">{item.title}</div>
                <div className="cart__product__card__info">{item.color}</div>
                <div className="cart__product__card__info">{item.size}</div>
                <div className="cart__product__card__price">
                    <div>{numberWidthCommas(item.price)}</div>
                    <del>{numberWidthCommas(399000)}</del>
                </div>
                <div className="cart__product__card__quanity">
                    <div className="product__info__item__quantity__btn"
                        onClick={() => updateQuanity('minus')}>
                    <i className="far fa-minus-square"></i>
                    </div>
                    <div className="product__info__item__quantity__input">
                        {item.quantity}
                        <div className="product__info__item__quantity__input__bg"></div>
                    </div>
                            
                    <div className="product__info__item__quantity__btn"
                            onClick={() => updateQuanity('plus')}>
                        <i className="far fa-plus-square"></i>
                    </div>
                    <div>
                        <i onClick={deleteProduct} style={{fontSize:'28px',cursor:'pointer', margin:'0px 15px'}} className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div> 
            
        </>
    )
}
