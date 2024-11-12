import React from 'react';
import './Footer.component.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_section_1">
                <div className="footer-logo">
                    <img src="/img/logo_hamster.png" alt="Hamster King Logo" />
                    <p>“Chọn Hamster King - trao niềm tin đến với vật yêu của bạn”</p>
                    <div className="footer_section_2">
            <span ><i className="fab fa-facebook-f"></i></span>
                    <span ><i className="fab fa-instagram"></i></span>
                    <span ><i className="fab fa-youtube"></i></span>
                    <span><i className="fab fa-tiktok"></i></span>
            </div>
                </div>
                <div className="footer-section">
                    <h3>Pháp lý</h3>
                    <ul>
                        <li><span>Chính sách bảo mật</span></li>
                        <li><span>Điều khoản và điều kiện sử dụng</span></li>
                        <li><span>Chính sách Cookie</span></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Công ty</h3>
                    <ul>
                        <li><span>Giới thiệu về chúng tôi</span></li>
                        <li><span>Liên hệ</span></li>
                        <li><span>Câu hỏi thường gặp</span></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Trợ giúp</h3>
                    <ul>
                        <li><span>Vận chuyển và giao hàng</span></li>
                        <li><span>Chính sách đổi trả</span></li>
                        <li><span>Bảo mật và thanh toán</span></li>
                    </ul>
                </div>
            
            </div>
            <div className="footer_section_2">
           <p>@HamsterKing</p>
            </div>
        </footer>
    );
}

export default Footer;
