import { Typography } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';
import quan_huyen from '../dist/quan_huyen.json';
import tinh_tp from '../dist/tinh_tp.json';
import xa_phuong from '../dist/xa_phuong.json';

export default function FormCheckout() {
    const tinh = Object.entries(tinh_tp);
   const huyen = Object.entries(quan_huyen);
   const xa = Object.entries(xa_phuong);
   const [districtSelected, setDistrictSelected] = useState('')
   const [wardsSelected, setwardsSelected] = useState('')

   const [province, setProvince] = useState('');
   const [district, setDistrict] = useState('');
   const [wards, setWards] = useState('');

    const HandleValueProvince = (e) => {
        setProvince(e.target.value);
    }
    
    const handleValueDistrict = (e) => {
        setDistrict(e.target.value)
    }

    const handleValueDiWards = (e) => {
        setWards(e.target.value)
    }
    
    useEffect(() => {
        setDistrictSelected(huyen.filter(item => item[1].path_with_type.includes(`Tỉnh ${province}`) || item[1].path_with_type.includes(`Thành phố ${province}` )));
        setwardsSelected(xa.filter(item => item[1].path_with_type.includes(`Quận ${district}`) || item[1].path_with_type.includes(`Huyện ${district}` )))
    }, [province,district])
    console.log({district,province,wards}) 

    return (
        <>
                    <div className="checkout__form__title">Thông tin giao hàng</div>                   
                    <form className="checkout__form__customer" action="">
                        <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Họ tên"
                        placeholder="Nhập họ và tên"
                        fullWidth
                        multiline
                        />
                        <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        type="number"
                        fullWidth
                        multiline
                        />
                         <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Địa chỉ"
                        placeholder="Nhập địa chỉ"
                        multiline
                        fullWidth
                        multiline
                        />
                        <div  className="checkout__form__customer__select">
                            <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Chọn Tỉnh/Thành phố"
                            size="small"
                            SelectProps={{
                                native: true
                            }}
                            helperText="Please select your Province/City"
                            variant="outlined"
                            onChange={HandleValueProvince}
                            >
                            {  tinh.map((item,index) => (
                                <option key={index} value={item[1].name}>
                                {item[1].name}
                                </option>
                            ))}
                            </TextField>
                            {/* <select name="" id="" onChange={HandleValueProvince}>
                                <option>Chọn Tỉnh/Thành phố</option>
                                {
                                    tinh.map((item,index) => (
                                        <option key={index}>{item[1].name}</option>
                                    ))
                                }   
                            </select> */}
                            <TextField
                            id="outlined-select-currency-native"
                            select
                            size="small"
                            label={province ? '' : "Chọn Quận/Huyện"}
                            SelectProps={{
                                native: true
                            }}
                            helperText="Please select your County/District"
                            variant="outlined"
                            onChange={handleValueDistrict}
                            >
                            {  province !== '' ? districtSelected.map((item,index) => (
                                <option key={index} value={item[1].name}>
                                {item[1].name}
                                </option>
                            )) : null
                            }
                            </TextField>
                            {/* <select name="" id="" onChange={handleValueDistrict}>
                                <option>Chọn Quận/Huyện</option>
                                {
                                    districtSelected ? districtSelected.map((item,index) => (
                                        <option key={index}>{item[1].name}</option>
                                    )) : null
                                }
                                
                            </select> */}
                            <TextField
                            id="outlined-select-currency-native"
                            select
                            size="small"
                            label={district ? '' : "Chọn Quận/Huyện"}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your Commune/Ward"
                            variant="outlined"
                            onChange={handleValueDiWards}
                            >
                            {  district !== '' ? wardsSelected.map((item,index) => (
                                <option key={index} value={item[1].name}>
                                {item[1].name}
                                </option>
                            )) : null
                            }
                            </TextField>
                            {/* <select name="" id="" onChange={handleValueDiWards}>
                                <option>Chọn Xã/Phường</option>
                                {
                                    wardsSelected ? wardsSelected.map((item,index) => (
                                        <option key={index}>{item[1].name}</option>
                                    )) :null
                                }
                                
                            </select> */}
                        </div>
                        <Typography align="center" color='secondary' variant="inherit">*(Có 1 số xã/phường vẫn chưa được update, nếu khi quý khách hàng chọn xã nơi mình ở nhưng không có thì xin mời quý khách hàng nhập xã/phường vào phần địa chỉ)</Typography>
                    </form>
                    
                </>
    )
}
