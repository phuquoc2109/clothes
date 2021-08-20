import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import numberWidthCommas from '../utils/NumberWithCommas';

export default function CheckoutProduct({cartProduct, totalPrice,priceDiscount }) {
    const priceShip = 30000;
    const [valueDiscount, setValueDiscount] = useState('');
    const [priceCodeDiscount, setPriceCodeDiscount] = useState(0);
   
    const [codeDiscount, setcodeDiscount] = useState('');
    const discount = ["yolofive","yoloten","yolofifteen"];

    const hadleDiscount = () => {
        if(codeDiscount == "yolofive"){
            setPriceCodeDiscount(0.05);
        }else if(codeDiscount == "yoloten"){
            setPriceCodeDiscount(0.1);
        }
        else if(codeDiscount == "yolofifteen"){
            setPriceCodeDiscount(0.15);
        }else{
            setPriceCodeDiscount(0);
        }
        setValueDiscount('')
    }

    useEffect(() =>{
         setcodeDiscount(discount.filter(item => item === valueDiscount.toLowerCase()))
    },[valueDiscount])
    

    return (
        <div>
            <div className="checkout__info__main">
                        {
                            cartProduct.map((item, index) => (
                                <div key={index} className="checkout__info__product">
                                    <div className="checkout__info__product__select">
                                        <img src={item.img} alt="Ảnh có thể bị lỗi khi update" />
                                        <div>
                                            <div className="checkout__info__product__select__name">{item.title} {item.color ? (`- ${item.color.toUpperCase()} - ${item.size.toUpperCase()}`) : ''}</div>
                                            <div className="checkout__info__product__select__quantity">Số lượng: {item.quantity}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="checkout__info__product__price">{numberWidthCommas(item.price)} VNĐ</div>
                                        <del style={{fontSize:"14px"}}>{numberWidthCommas(item.priceOld ? item.priceOld : 399000)} VNĐ</del>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr/>
                    <div className="checkout__info__discount">
                        <Typography style={{marginBottom:'10px'}} variant="subtitle2" display="block"><i>Bạn có mã giảm giá? Vui lòng nhập tại đây!</i></Typography>
                        <TextField value={valueDiscount} onChange={(e) => setValueDiscount(e.target.value)} margin="dense" fullWidth className="checkout__info__discount__input" size="small"  placeholder="Nhập mã giảm giá..." variant="outlined" color="secondary" />
                        <Button onClick={hadleDiscount} fullWidth className="checkout__info__discount__btn" variant="contained" color="secondary">Sử dụng</Button>
                    </div>
                    <div className="checkout__info__payment">
                        <div className="checkout__info__payment__temp">
                            <Typography>Tạm tính</Typography>
                            <Typography>{numberWidthCommas(totalPrice)} VNĐ</Typography>
                        </div>
                        <div className="checkout__info__payment__discount">
                            <Typography>Chiết khấu</Typography>
                            <Typography>- {numberWidthCommas(priceDiscount - totalPrice)} VNĐ</Typography>
                        </div>
                        <div className="checkout__info__payment__priceship">
                            <Typography>Phí vận chuyển</Typography>
                            <Typography>
                                {
                                    totalPrice > 400000 ? '0 VNĐ' : `${numberWidthCommas(priceShip)} VNĐ`
                                }
                                
                            </Typography>
                        </div>
                        <div className="checkout__info__payment__priceship">
                            <Typography>Số tiền được giảm</Typography>
                            <Typography>
                                    `- {numberWidthCommas(totalPrice * priceCodeDiscount)} VNĐ`
                            </Typography>
                        </div>
                        <hr />
                        <div className="checkout__info__payment__pricepayment" >
                            <Typography >Cần thanh toán</Typography>
                            <Typography variant="h5">
                                {
                                   totalPrice > 400000 ? `${numberWidthCommas(totalPrice - (totalPrice * priceCodeDiscount))} VNĐ` : `${numberWidthCommas((totalPrice + priceShip) - (totalPrice * priceCodeDiscount))} VNĐ` 
                                }
                                
                            </Typography>
                        </div>    
                    </div>
                    <div className="checkout__form__payment">
                        <div className="checkout__form__title">
                            Phương thức thanh toán
                        </div>
                        <div className="checkout__form__payment__select">
                            <FormControlLabel
                            className="checkout__form__payment__select__one"
                            control={<Switch  name="antoine" />}                      
                            label="Thanh toán khi nhận hàng (COD)"
                            checked='true'
                            />
                            <FormControlLabel
                            className="checkout__form__payment__select__two"
                            control={<Switch  name="antoine" />}
                            label="Thanh toán qua VNPAY (ATM/ VISA/ MASTER/ QR Code)"
                            />
                        </div>
                    </div>
                    <div className="checkout__info__discount">
                        <TextField name="message" multiline rows={4} margin="dense" fullWidth placeholder="Lời nhắn đến YoLo..." variant="outlined" color="primary" />
                        <Button type="submit" fullWidth className="checkout__info__discount__btn" variant="contained" color="primary">Hoàn tất đơn hàng</Button>
                    </div>
        </div>
    )
}
