import { Button, Grid } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import accessoryData from '../assets/fake-data/accessory';
import productData from '../assets/fake-data/products';
import AccessoryCard from '../components/AccessoryCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../styles/search.css';

export default function Search() {
    const [valueSearch, setValueSearch] = useState('');
    const catalogData = productData.getAllProducts();
    const accessoryDataAll = accessoryData.getAllAccessory();
    const [product, setProduct] = useState([])
    const [accessory, setAccessory] = useState([])
    // const dataSearch = [...product, ...accessory];
    const handleValueSearch = (e) => {
        if(valueSearch.length > 0){
            setProduct(catalogData.filter(item => item.title.toLowerCase().includes(valueSearch.toLowerCase())));
            setAccessory(accessoryDataAll.filter(item => item.title.toLowerCase().includes(valueSearch.toLowerCase())));
            setValueSearch('');
            toast.success(`Sản phẩm liên quan đến từ khoá tìm kiếm của bạn`);
        }
        else{
            e.preventDefault();
            toast.error('Mời bạn nhập sản phẩm để tìm kiếm ')
            setProduct([]);
            setAccessory([])
        }
    }
    
    return (
        <div >
            <Header />
            <div style={{marginTop:'100px', marginLeft:'20px'}}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumbs">
                        <Link to="/" >Trang chủ</Link>
                        <Typography color="secondary">Tìm kiếm</Typography>
                    </Breadcrumbs>
                </div>
            <div className="search">
                <div className="search__input">
                    <TextField value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} style={{width:'300px', marginRight:'10px'}}  id="outlined-basic" label="Tìm kiếm" variant="outlined" />
                    <Button onClick={handleValueSearch} style={{width:'120px'}} variant="contained" color="primary">Tìm kiếm</Button>
                </div>
                <div className="search__output">
                    <Grid 
                    item
                    container
                    xs={12}
                    >
                        {
                        product.map((item, index)=> (
                            <Grid
                            item
                            container
                            justifyContent="center"
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            >
                                <ProductCard  
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                title={item.title}
                                price={item.price}
                                slug={item.slug} 
                                />
                            </Grid>
                        ))
                    }
                    </Grid>
                    <Grid 
                    item
                    container
                    xs={12}
                    >
                    {
                        accessory.map((item, index) => (
                            <Grid
                            item
                            container
                            justifyContent="center"
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            >
                                <AccessoryCard item={item} />
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
