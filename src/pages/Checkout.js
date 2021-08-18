import Backdrop from '@material-ui/core/Backdrop';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutProduct from '../components/CheckoutProduct';
import DiaLog from '../components/DiaLog';
import Footer from '../components/Footer';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import quan_huyen from '../dist/quan_huyen.json';
import tinh_tp from '../dist/tinh_tp.json';
import xa_phuong from '../dist/xa_phuong.json';
import { removeCart } from '../slide/CartSlice';
import '../styles/checkout.css';

export default function Checkout() {
    const cartProduct = useSelector(state => state.carts);
    const dispatch = useDispatch();
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

    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);

    const [loading, setLoading] = useState(true);
    const [diaLog, setDiaLog] = useState(true)

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

    const handleEmail = (e) => {
        const valueEmail = e.target.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(String((valueEmail).toLowerCase()))){
          setEmail(valueEmail);
          setCheckEmail(true);
        }else{
            setCheckEmail(false)
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
     
    useEffect(() =>{
        setDistrict('');
    },[province])
    useEffect(() =>{
        setWards('');
    },[district])
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(false)
        if(name != '' && phone != '' && email != '' && address != '' 
        && province != '' && district != ''){
               emailjs.sendForm('service_16or8k8', 'template_zjg8uzb', e.target, 'user_tAnd6vxmGTA480vCSTdsm')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                setTimeout(() => {
                    const action = removeCart();
                    dispatch(action);
                    e.target.reset();
                    setLoading(true);
                },3000)
                setTimeout(() => {
                    setDiaLog(false);
                },4000)
               
        }else{
            e.preventDefault();
            toast.error("Bạn không được bỏ trống thông tin giao hàng")
            setLoading(true);
        }
    }
    toast.configure();
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
                <form onSubmit={handleFormSubmit} className="checkout">
                    <div className="checkout__form">
                        <FormCheckout 
                        handleName ={handleName}
                        handlePhone={handlePhone}
                        handleEmail={handleEmail}
                        handleAddress={handleAddress}
                        checkName={checkName}
                        checkPhone={checkPhone}
                        checkEmail={checkEmail}
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
                </form> 
                {
                    loading ? '' : 
                <Backdrop style={{zIndex:'777'}} open='true' >
                    <CircularProgress color="inherit" />
                </Backdrop>
                }
                {
                    diaLog ? '' :
                    <DiaLog setDiaLog={setDiaLog} />
                }
            
            <Footer />
        </>
    )
}
