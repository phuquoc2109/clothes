import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div>
            <Header />
                <div style={{marginTop:'100px', marginLeft:'20px'}}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumbs">
                        <Link to="/" >Trang chủ</Link>
                        <Typography color="secondary">Liên hệ</Typography>
                    </Breadcrumbs>
                </div>
                <div className="contact">
                    
                </div>
            <Footer />
        </div>
    )
}
