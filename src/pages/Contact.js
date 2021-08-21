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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.7871977935076!2d108.28345721890493!3d15.840949427460602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420fc10f7a3bd9%3A0xb80871808ea549b8!2zTmfDoyBiYSBOYW0gUGjGsOG7m2MgRHV5IFh1ecOqbg!5e0!3m2!1svi!2s!4v1629512887114!5m2!1svi!2s" style={{width:"100%", height:"500px"}} allowfullscreen="" loading="lazy"></iframe>
                    <div className="contact__form">
                        <form className="contact__form__input">
                            <div className="contact__form__input__row">
                                <label htmlFor="">Họ tên *</label>
                                <input type="text" />
                            </div>
                            <div className="contact__form__input__row">
                                <label htmlFor="">Email *</label>
                                <input type="text" />
                            </div>
                            <div className="contact__form__input__row">
                                <label htmlFor="">Điện thoại *</label>
                                <input type="number" />
                            </div>
                            <div className="contact__form__input__area">
                                <label className="contact__form__input__area__lb" style={{align:"top"}} htmlFor="">Lời nhắn *</label>
                                <textarea type="text" />
                            </div>
                            <button onClick={(e) => e.preventDefault()}>Gửi</button>
                        </form>
                        <div className="contact__form__output">
                            <div>
                                <div className="contact__form__output__title">
                                    <strong>Để lại lời nhắn, hoặc những góp ý của bạn với Yody. Yody sẽ đọc và liên hệ lại với bạn ngay nhé!</strong>
                                </div>
                                <div className="contact__form__output__location"><i class="fas fa-map-marked-alt"></i><strong>Văn phòng:</strong> Công ty YOLO, Nam Phước, Duy Xuyên, Tỉnh Quảng Nam</div>
                                <div className="contact__form__output__pay">
                                    <strong><i class="fas fa-phone-volume"></i>Gọi mua hàng (08:00 - 22:00)</strong>
                                    <p>1800 2086 (miễn phí)</p>
                                    <p>Tất cả các ngày trong tuần</p>
                                </div>
                                <div className="contact__form__output__pay">
                                    <strong><i class="fas fa-phone-volume"></i>Góp ý & khiếu nại (08:00 - 22:00)</strong>
                                    <p>1800 2086 (miễn phí)</p>
                                    <p>Tất cả các ngày trong tuần</p>
                                </div>
                                <div className="contact__form__output__email">
                                    <strong><i class="fas fa-envelope-open-text"></i>Email: quocduongphu@gmail.com</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
