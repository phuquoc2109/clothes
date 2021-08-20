import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import accessoryData from '../assets/fake-data/accessory'
import AccessoryCard from '../components/AccessoryCard'
import AccessoryView from '../components/AccessoryView'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import '../styles/accessoriesDetail.css'

export default function AccessoryDetail() {
    const param = useParams();
    const accessoryAll = accessoryData.getAllAccessory();
    const accessory = accessoryAll.find(item => item.slug === param.slug);
    const realateAccessory = accessoryData.getAccessory(8)

    useEffect(() => {
        window.scroll(0,0);
    },[accessory])

    return (
        <div>
            <Header />
            <div style={{marginTop: '100px'}}>
                <div  className="bg bg2" ></div>
                <Section>
                    <SectionBody>
                        <AccessoryView accessory={accessory} />
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
                                realateAccessory.map((item, index) => (
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
                        </SectionBody>
                </Section>
            </div>
            <Footer />
        </div>
    )
}
