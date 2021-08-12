import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import productData from '../assets/fake-data/products';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
import Section, { SectionBody, SectionTitle } from '../components/Section';

export default function Product() {
    const params = useParams();
    const product = productData.getProductBySlug(params.slug)

    const realatedProduct = productData.getProducts(8)

    useEffect(()=> {
        window.scroll(0,0)
    },[product])

    return (
        <div>
            <Header />
                <div >
                    <Section>
                        <SectionBody>
                            <ProductView product={product} />
                        </SectionBody>
                    </Section>
                    <Section>
                        <SectionTitle>
                            Khám phá thêm
                        </SectionTitle>
                        <SectionBody>
                        <Grid 
                        item
                        container
                        xs={12}
                        >
                            {
                                realatedProduct.map((item, index) => (
                                    <Grid
                                    item
                                    container
                                    justifyContent="center"
                                    key={index}
                                    xs={6}
                                    sm={4}
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
                        </SectionBody>
                    </Section>
                </div>
            <Footer />
        </div>
    )
}
