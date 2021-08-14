import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import '../styles/checkout.css';


export default function Checkout() {
   
    return (
        < >
            <Header />
            <div style={{marginTop:'100px', marginLeft:'20px'}}>
                 <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumbs">
                    <Link to="/" >Trang chủ</Link>
                    <Link to="/cart" >Giỏ hàng</Link>
                    <Typography color="secondary">Thanh toán</Typography>
                </Breadcrumbs>
            </div>
            <div className="checkout">
                <FormCheckout />
                <div className="checkout__info">
                    san pham
                </div>
            </div>
            <Footer />
        </>
    )
}
