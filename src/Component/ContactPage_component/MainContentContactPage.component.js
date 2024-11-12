import React from 'react';
import { Link } from 'react-router-dom';
import './MainContentContactPage.component.css';

const MainContentContactPage = () => {
    return (
        <main className="contact-main-content">
            <div className="banner-contact"></div>
            <div className="section-1">
                <Link to="/homePage" className='custom-link'><i class="fa-solid fa-house"></i></Link> &gt; Trang liên hệ
            </div>
            <div className="section-2">
                <div className="content-left">
                    <h1>Let's talk with us</h1>
                    <p>
                        Nếu có thông tin cần phản ánh, hãy gửi email cho chúng tôi.
                        Chúng tôi sẽ giải quyết. Cảm ơn các bạn!
                    </p>
                    <div className="contactAddress">
                        <div className="line">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>226/12 Nguyễn Văn Lượng, quận Gò Vấp, Thành phố Hồ Chí Minh</p>
                        </div>
                        <div className="line">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>012345678</p>
                        </div>
                        <div className="line">
                            <i className="fa-solid fa-envelope"></i>
                            <p>hamsterking@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <form className="formContact" action="">
                        <h1>CONTACT US</h1>
                        <div className="form-group">
                            <input className='firstName' type="text" placeholder='First Name*' />
                            <input className='lastName' type="text" placeholder='Last Name*' />
                        </div>
                        <div className="form-group">
                            <input className='email' type="email" placeholder='Email*' />
                        </div>
                        <div className="form-group">
                            <input className='phoneNumber' type="text" placeholder='Phone Number*' />
                        </div>
                        <div className="form-group">
                            <textarea name="" className='message' placeholder='Your Message...'></textarea>
                        </div>
                        <div className="form-group">
                            <button className='btn-send-contact'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>GỬI TIN NHẮN</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <hr className="hr-separator" />
            <div className="section-3">
                <div className="content-left">
                    <img src="/img/googlemap.png" alt="" />
                </div>
            </div>
        </main>
    );
};

export default MainContentContactPage;
