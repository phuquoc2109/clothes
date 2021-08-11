import React from 'react'
import '../styles/main.css'
import Slider from '../components/Slider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, {SectionTitle, SectionBody} from '../components/Section' 
import policy from '../assets/fake-data/policy'
import PolicyCard from '../components/PolicyCard'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import productData from '../assets/fake-data/products';
import ProductCard from '../components/ProductCard'
import banner from '../assets/images/banner.png'


export default function Main() {

    return (
        <div className="main">
            {/* slide */}
            <Slider
            data = {heroSliderData}
            control={true}
            timeOut={3000}
            auto={true}
            />
            {/* policy */}
            <Section>
                <SectionBody>
                    <Grid container item xs={12}>
                    {
                        policy.map((item, index) => (
                            <Grid 
                            justifyContent='center' 
                            container 
                            item
                            sm={6}
                            lg={3}
                            key={index} 
                            >
                            <Link to='/policy'>
                            <PolicyCard 
                            key={index} 
                            name={item.name}
                            description={item.description}
                            icon={item.icon}
                            />
                            </Link>
                             </Grid>
                        ))
                    }
                    </Grid>
                </SectionBody>
            </Section>

                {/* TOp product */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid container item xs={12}>
                            {productData.getProducts(4).map((item,index) => (
                                <Grid 
                                justifyContent='center'
                                alignContent="center"
                                alignItems="center"
                                container 
                                item
                                key={index} 
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
                            ))} 
                    </Grid>
                </SectionBody>
            </Section>
            
            {/* new Product */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid container item xs={12}>
                            {productData.getProducts(8).map((item,index) => (
                                <Grid 
                                justifyContent='center'
                                alignContent="center"
                                alignItems="center"
                                container 
                                item
                                key={index} 
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
                            ))} 
                    </Grid>
                </SectionBody>
            </Section>

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img style={{padding:"0px 50px"}} src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>

            {/* popular product */}
            <Section>
                <SectionTitle>
                    Phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid container item xs={12}>
                            {productData.getProducts(12).map((item,index) => (
                                <Grid 
                                justifyContent='center'
                                alignContent="center"
                                alignItems="center"
                                container 
                                item
                                key={index} 
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
                            ))} 
                    </Grid>
                </SectionBody>
            </Section>
        </div>
    )
}
