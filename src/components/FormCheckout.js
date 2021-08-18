import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

export default function FormCheckout(props) {
    const {
        handleName,
        handlePhone, 
        handleAddress,
        handleEmail,
        checkName,
        checkPhone,
        checkEmail,
        checkAddress,
        handleValueProvince,
        handleValueDistrict,
        handleValueDiWards,    
        tinh,
        district,
        province,
        districtSelected,
        wardsSelected
        } = props;

    return (
        <>
                    <div className="checkout__form__title">Thông tin giao hàng</div>                   
                    <div className="checkout__form__customer" >
                        <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Họ tên"
                        placeholder="Nhập họ và tên"
                        onChange={handleName}
                        name="name"
                        fullWidth
                        multiline
                        />
                        {
                            checkName ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu quý khách hàng nhập tên của mình</Alert>
                        }
                        <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại"
                        type="number"
                        onChange={handlePhone}
                        name="phone"
                        fullWidth
                        multiline
                        />
                         {
                            checkPhone ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu quý khách hàng nhập số điện thoại bắt đầu bằng số 0 và đủ 10 số</Alert>
                        }
                        <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Email"
                        placeholder="Nhập email"
                        onChange={handleEmail}
                        name="email"
                        fullWidth
                        multiline
                        />
                        {
                            checkEmail ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu quý khách hàng nhập đúng địa chỉ Email (Vd: abc@gmail.com) </Alert>
                        }
                         <TextField
                        id="outlined-select-currency-native"
                        className="checkout__form__customer__input"
                        label="Địa chỉ"
                        placeholder="Nhập địa chỉ"
                        onChange={handleAddress}
                        name="address"
                        fullWidth
                        multiline
                        />
                       {
                            checkAddress ? '' : <Alert style={{fontSize: "14px"}} severity="error">Yêu cầu quý khách hàng nhập địa chỉ của mình</Alert>
                        }
                         
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
                            onChange={handleValueProvince}
                            name="province"
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
                            name="district"
                            >
                            {  province !== '' ? districtSelected?.map((item,index) => (
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
                            name="wards"
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
                    </div>
                    
                </>
    )
}
