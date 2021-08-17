
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import Footer from '../components/Footer';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import quan_huyen from '../dist/quan_huyen.json';
import tinh_tp from '../dist/tinh_tp.json';
import xa_phuong from '../dist/xa_phuong.json';
import '../styles/checkout.css';

export default function Checkout() {
    const cartProduct = useSelector(state => state.carts);
    let totalPrice = 0;
    cartProduct.map(item => totalPrice += (item.price * item.quantity));
    let priceDiscount = 0
    cartProduct.map(item => priceDiscount +=(item.quantity * 399000) )
    
    const [name, setName] = useState('');
    const [checkName, setCheckName] = useState(true); 

    const [phone, setPhone] = useState(NaN);
    const [checkPhone, setCheckPhone] = useState(true);

    const [address, setAddress] = useState('');
    const [checkAddress, setCheckAddress] = useState(true); 

    const handleName = (e) => {
        const valueName = e.target.value;
        const regex = /[A-z]+/g;
        if(valueName != '' && regex.test(valueName)){
            setName(valueName);
            setCheckName(true);
        }else{
        setCheckName(false);
    }}

    const handlePhone = (e) => {
        const valuePhone = e.target.value;
        const regexPhone = /((0)+([0-9]{9})\b)/g;
        if(regexPhone.test(valuePhone)){
          setPhone(valuePhone);
          setCheckPhone(true);
        }else{
            setCheckPhone(false)
    }}

    const handleAddress = (e) => {
        const valueAddress = e.target.value;
        const regex = /[A-z]+/g;
        if(valueAddress != '' && regex.test(valueAddress)){
            setAddress(valueAddress);
            setCheckAddress(true);
        }else{
            setCheckAddress(false);
    }}

    const tinh = Object.entries(tinh_tp);
   const huyen = Object.entries(quan_huyen);
   const xa = Object.entries(xa_phuong);
   const [districtSelected, setDistrictSelected] = useState('')
   const [wardsSelected, setwardsSelected] = useState('')
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [wards, setWards] = useState('');
    const [checkOption, setCheckOption] = useState(false);
 
     const handleValueProvince = (e) => {
         const valueProvince = e.target.value;
         if(valueProvince){
             setProvince(valueProvince);
         }
 
     }
     
     const handleValueDistrict = (e) => {
         const valueDistrict = e.target.value;
         if(valueDistrict){
             setDistrict(valueDistrict)
         }
         
     }
     const handleValueDiWards = (e) => {
         const valueWards = e.target.value;
         if(valueWards){
             setWards(valueWards)
         }
     }

     useEffect(() => {
        setDistrictSelected(huyen.filter(item => item[1].path_with_type.includes(`Tỉnh ${province}`) || item[1].path_with_type.includes(`Thành phố ${province}` )));
        setwardsSelected(xa.filter(item => item[1].path_with_type.includes(`Quận ${district}`) || item[1].path_with_type.includes(`Huyện ${district}` )))
    }, [province,district])
     
     
 
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
                <div className="checkout__form">
                    <FormCheckout 
                    handleName ={handleName}
                    handlePhone={handlePhone}
                    handleAddress={handleAddress}
                    checkName={checkName}
                    checkPhone={checkPhone}
                    checkAddress={checkAddress}
                    handleValueProvince={handleValueProvince}
                    handleValueDistrict={handleValueDistrict}
                    handleValueDiWards={handleValueDiWards}
                    districtSelected={districtSelected}
                    wardsSelected={wardsSelected}
                    tinh={tinh}
                    province={province}
                    district={district}
                    wards={wards}
                    />
                </div>
                <div className="checkout__info">
                    <CheckoutProduct
                    cartProduct={cartProduct}
                    totalPrice={totalPrice}
                    priceDiscount={priceDiscount}          
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
