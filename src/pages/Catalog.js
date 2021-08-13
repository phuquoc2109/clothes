import {  Grid,Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/catalog.css';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard';
import category from '../assets/fake-data/category';
import CheckBox from '../components/CheckBox';
import colors from '../assets/fake-data/product-color';
import sizes from '../assets/fake-data/product-size';
import { useState } from 'react';


export default function Catalog() {
    const initFilter ={
        category:[],
        color: [],
        size: []
    }
    const [filter, setFilter] = useState(initFilter);

    const productList = productData.getAllProducts();
    const [products, setProducts] = useState(productList);

    const filterSelect = (type, checked, item) => {
        if(checked){
            switch(type){
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break;
                case "COLOR":
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break;
                case "SIZE":
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break;           
                default:
                }
        }else{
            switch(type){
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e!== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break;
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break;
                case "SIZE":
                    const newSize= filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break;
                default:
                }
        }
    }

    const updateProducts = () => {
            let temp = productList
            
            if(filter.category.length > 0){
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            
            if(filter.color.length > 0){
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    if(check){
                        return check;
                    }
                    return undefined;
                })
            }
            
            if(filter.size.length > 0){
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined;
                })
            }
            setProducts(temp);
        }

    useEffect(() => {
        updateProducts();
    },[filter, productList])

    const clearChecked = () =>{
        setFilter(initFilter);
    }
    const [clickFilter, setClickFiter] = useState(false)
    const handleFilter = () => {
        setClickFiter(!clickFilter)
    }

    return (
        <div>
            <Header />
                <div className="catalog">
                <Button className="catalog__button__filter" onClick={handleFilter} color="primary" variant="contained">Bộ lọc</Button>
                    <div className={clickFilter ? "catalog__filter__active" : "catalog__filter"}>
                         
                         <div className="catalog__filter__widget">
                             <div className="catalog__filter__widget__title">
                                 Danh mục sản phẩm
                                {
                                    clickFilter ? <i onClick={handleFilter} className="fas fa-times"></i> : null
                                }
                             </div>
                             <div className="catalog__filter__widget__content">
                                {
                                    category.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                display={item.display}
                                                onChange={input => filterSelect("CATEGORY", input.checked, item)}
                                                checked={filter.category.includes(item.categorySlug)}
                                            />
                                       </div>
                                    ))
                                }
                             </div>
                         </div>

                         <div className="catalog__filter__widget">
                             <div className="catalog__filter__widget__title">
                                 Màu sắc
                             </div>
                             <div className="catalog__filter__widget__content">
                                {
                                    colors.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                display={item.display}
                                                onChange={input => filterSelect("COLOR", input.checked, item)}
                                                checked={filter.color.includes(item.color)}
                                            />
                                       </div>
                                    ))
                                }
                             </div>
                         </div>

                         <div className="catalog__filter__widget">
                             <div className="catalog__filter__widget__title">
                                 Kích cỡ
                             </div>
                             <div className="catalog__filter__widget__content">
                                {
                                    sizes.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                display={item.display}
                                                onChange={input => filterSelect("SIZE", input.checked, item)}
                                                checked={filter.size.includes(item.size)}
                                            />
                                       </div>
                                    ))
                                }
                             </div>
                         </div>

                         <div className="catalog__filter__widget">
                             <div className="catalog__filter__widget__content">
                                <Button onClick={clearChecked} color="secondary" variant="contained">Xoá tất cả</Button>
                            </div>      
                        </div>      

                    </div>
                    <div className="catalog__content">
                        <Grid 
                        item
                        container
                        xs={12}
                        >
                            {
                                products.map((item, index) => (
                                    <Grid
                                    item
                                    container
                                    justifyContent="center"
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={4}
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
                    </div>
                </div>
            <Footer />
        </div>
    )
}
