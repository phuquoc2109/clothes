import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        name: 'Giới thiệu',
        path: "./about"
    },
    {
        name: 'Liên hệ',
        path: "./about"
    },
    {
        name: 'Tuyển dụng',
        path: "./about"
    },
    {
        name: 'Tin tức',
        path: "./about"
    },
    {
        name: 'Hệ thống cửa hàng',
        path: "./about"
    }

]
const footerCustomerLinks = [
    {
        name: 'Chính sách đổi trả',
        path: "./about"
    },
    {
        name: 'Chính sách bảo hành',
        path: "./about"
    },
    {
        name: 'Chính sách hoàn tiền',
        path: "./about"
    }
    
]

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__one">
                <span className="title">Tổng đài hỗ trợ</span>
                <ul>
                    <li>Liên hệ đặt hàng: <b>0916 904 140</b></li>
                    <li>Thắc mắc đơn hàng: <b>0916 904 140</b></li>
                    <li>Góp ý, khiếu nại: <b>0916 904 140</b></li>
                </ul>
            </div>
            <div className="footer__two">
                <span className="title">Về YoLo</span>
                <div className="footer__two__about">
                {
                    footerAboutLinks.map((item, index) => (
                        <Link key={index} >{item.name}</Link>
                    ))
                }
                </div>
            </div>
            <div className="footer__three">
                <span className="title">Chăm sóc khách hàng</span>
                <div className="footer__three__about">
                {
                    footerCustomerLinks.map((item, index) => (
                        <Link key={index} >{item.name}</Link>
                    ))
                }
                </div>
            </div>
            <div className="footer__four">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <p>Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.</p>
            </div>
        </div>
    )
}
