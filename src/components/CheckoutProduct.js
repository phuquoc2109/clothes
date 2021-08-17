import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import numberWidthCommas from '../utils/NumberWithCommas';

export default function CheckoutProduct({cartProduct, totalPrice, priceDiscount }) {
    const priceShip = 30000;
    return (
        <div>
            <div className="checkout__info__main">
                        {
                            cartProduct.map((item, index) => (
                                <div key={index} className="checkout__info__product">
                                    <div className="checkout__info__product__select">
                                        <img src={item.img} alt="Ảnh có thể bị lỗi khi update" />
                                        <div>
                                            <div className="checkout__info__product__select__name">{item.title} - {item.color.toUpperCase()} - {item.size.toUpperCase()}</div>
                                            <div className="checkout__info__product__select__quantity">Số lượng: {item.quantity}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="checkout__info__product__price">{numberWidthCommas(item.price)} VNĐ</div>
                                        <del style={{fontSize:"14px"}}>{numberWidthCommas(399000)} VNĐ</del>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <hr/>
                    <div className="checkout__info__discount">
                        <Typography style={{marginBottom:'10px'}} variant="subtitle2" display="block"><i>Bạn có mã giảm giá? Vui lòng nhập tại đây!</i></Typography>
                        <TextField margin="dense" fullWidth className="checkout__info__discount__input" size="small"  placeholder="Nhập mã giảm giá..." variant="outlined" color="secondary" />
                        <Button fullWidth className="checkout__info__discount__btn" variant="contained" color="secondary">Sử dụng</Button>
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
                                    totalPrice > 400000 ? '0 VNĐ' : numberWidthCommas(priceShip)
                                }
                            </Typography>
                        </div>
                        <hr />
                        <div className="checkout__info__payment__pricepayment" >
                            <Typography >Cần thanh toán</Typography>
                            <Typography  variant="h5">
                                {
                                   totalPrice > 400000 ? `${numberWidthCommas(totalPrice)} VNĐ` : `${numberWidthCommas(totalPrice + priceShip)} VNĐ` 
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
                            />
                            <FormControlLabel
                            className="checkout__form__payment__select__two"
                            control={<Switch  name="antoine" />}
                            label="Thanh toán qua VNPAY (ATM/ VISA/ MASTER/ QR Code)"
                            />
                        </div>
                    </div>
                    <div className="checkout__info__discount">
                        <TextField multiline rows={4} margin="dense" fullWidth placeholder="Lời nhắn đến YoLo..." variant="outlined" color="primary" />
                        <Button fullWidth className="checkout__info__discount__btn" variant="contained" color="primary">Hoàn tất đơn hàng</Button>
                    </div>
        </div>
    )
}
