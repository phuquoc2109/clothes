import { Button } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCart from '../components/ProductCart'
import '../styles/cart.css'
import numberWidthCommas from '../utils/NumberWithCommas'


export default function Cart() {
    const cartProduct = useSelector(state => state.carts);
    let totalPrice = 0;
    cartProduct.map(item => totalPrice += (item.price * item.quantity));
    const [checkCheckout, setCheckCheckout] = useState(false)
   
    useEffect(() => {
        window.scroll(0,0)
    },[cartProduct])

    return (
        <div>
            <Header />
            <div style={{marginTop:'100px', marginLeft:'20px'}}>
                 <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumbs">
                    <Link to="/" >Trang chủ</Link>
                    <Typography color="secondary">Giỏ hàng</Typography>
                </Breadcrumbs>
            </div>
            <div className="cart">  
                <div className="cart__product">
                    {
                        cartProduct.length > 0 ? cartProduct.map((item,index) =>(
                            <ProductCart key={index} item={item} />
                        )) :  <Typography 
                            style={{marginTop: '10%'}} 
                            align="center" 
                            variant="h2" 
                            color="error">
                                Giỏ hàng trống
                            </Typography>
                    }
                </div>
                <div className="cart__price">
                    <div className="cart__price__money">
                        <div>Thành tiền</div>
                        <div>{numberWidthCommas(totalPrice)} VNĐ</div>
                    </div>
                    <div className="cart__price__description">
                        {
                            (totalPrice - 400000) < 0 ? `Đơn hàng của bạn còn thiếu ${numberWidthCommas(400000 - totalPrice)} để được freeship`
                                            :'Đơn hàng của bạn đã được free ship nhé :D'
                        }
                    </div>
                    <div className="cart__price__btn">
                        {
                           cartProduct.length > 0
                            ? <Link to = "/cart/checkout"><Button size="large" variant="contained" color="primary">Tiến hành đặt hàng</Button></Link>
                            : <Button onClick={() => setCheckCheckout(true)} size="large" variant="contained" color="primary">Tiến hành đặt hàng</Button>
                        }
                        {
                            checkCheckout ? <Alert style={{margin: '10px 5px 0px', fontSize: "14px"}} severity="warning">Quý khách hàng chưa có sản phẩm để thanh toán</Alert> : ''
                        }
                        <Link to='/catalog'><Button size="large" variant="outlined" color="primary">Tiếp tục mua hàng</Button></Link>
                    </div>
                </div> 
            </div>
            <Footer />
        </div>
    )
}
