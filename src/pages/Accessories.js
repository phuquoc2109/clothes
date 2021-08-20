import { Grid } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import React, { useState } from 'react'
import accessoryData from '../assets/fake-data/accessory'
import AccessoryCard from '../components/AccessoryCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/accessories.css'

export default function Accessories() {
    const initAccessorys = accessoryData.getAllAccessory();
    const [accessorys , setAccessorys] = useState(initAccessorys);
    const [valueSort, setValueSort] = useState('')
    
    const handleChecked = (e) => {
            let temp = []
            if(e.target.value=== 'non'){
                temp = initAccessorys.filter(item => item.title.toLowerCase().includes('nón'));
            }else if(e.target.value === 'balo'){
                temp = initAccessorys.filter(item => item.title.toLowerCase().includes('balo'));
            }else if(e.target.value === 'nit'){
                temp = initAccessorys.filter(item => item.title.toLowerCase().includes('nịt'));
    
            }else if(e.target.value === 'tui'){
                temp = initAccessorys.filter(item => item.title.toLowerCase().includes('túi')); 

            }else if(e.target.value === 'all'){
                temp = initAccessorys;
            }
            setAccessorys(temp);
        }
        console.log(valueSort)
    

    return (
        <div>
            <Header />
            <div className="bg bg2"></div>
                <div className="accessories">
                    
                    <div className="accessories__sort">
                        <div className="accessories__sort__check">
                            <RadioGroup row onChange={handleChecked} >
                                <FormControlLabel value="all" control={<Radio />} label="Tất cả" />
                                <FormControlLabel value="non" control={<Radio />} label="Nón" />
                                <FormControlLabel value="balo" control={<Radio />} label="Balo" />
                                <FormControlLabel value="nit" control={<Radio />} label="Nịt" />
                                <FormControlLabel value="tui" control={<Radio />} label="Túi" />
                            </RadioGroup>
                        </div>
                        <div className="accessories__sort__price">
                        <FormControl variant="outlined" color="primary" >
                            <InputLabel >Sắp xếp</InputLabel>
                            <Select
                            native
                            onChange={(e) => setValueSort(e.target.value)}
                            >
                            <option >Mặc định</option>
                            <option value='asc'>Giá tăng dần</option>
                            <option value='desc'>Giá giảm dần</option>
                            </Select>
                        </FormControl>
                        </div>
                    </div>
                    <div className="accessories__product">
                        <Grid container item xs={12}>
                        {
                            accessorys.sort((a,b) => (
                                valueSort === 'desc' ? 
                                ((a.price < b.price) ? 1 : - 1) :
                                valueSort === 'asc' ?
                                ((a.price > b.price) ? 1 : - 1 ) : 0 
                            )).map((item,index) => (
                                <Grid
                                key={index}
                                justifyContent='center'
                                alignContent="center"
                                alignItems="center"
                                container 
                                item
                                sm={6}
                                md={4}
                                lg={3}
                                >
                                <AccessoryCard 
                                    item={item}
                                /> 
                                </Grid>
                            ))
                        }
                        </Grid>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
