import { Link } from 'react-router-dom';
import React from 'react';
import './MainContentLoginPage.component.css';
const MainContentLoginPage = () => {
    return (
        <main className="loginPage-main-content">
            <div className="section_1">
                <h1>CHÀO MỪNG BẠN ĐẾN VỚI</h1>
                <h1>HAMSTER KING</h1>
            </div>
            <div className="section_2">
                <div className="content_left">
                    <div className="container">
                        <img src=".\img\login_img.png" alt="" />
                    </div>
                </div>
                <div className="content_right">
                    <form action="">
                        <h3>ĐĂNG NHẬP</h3>
                        <div className="form-group">
    <label htmlFor="username">TÊN ĐĂNG NHẬP <span>*</span></label>
    <div className="form">
        <input className='input' type="text" id="username" required />
        <span className="input-border"></span>
    </div>
</div>
<div className="form-group">
    <label htmlFor="password">Mật khẩu<span>*</span></label>
    <div className="form">
        <input className='input' type="password" id="password" required />
        <span className="input-border"></span>
    </div>
</div>

                        <button className="btn_login">Đăng nhập</button>
                        <div className="social-login">
                            <span>HOẶC</span>
                            <div className="social-buttons">
                                <button className="btn_social btn_facebook">
                                    <img src=".\img\facebook_icon.png" alt="Facebook" />
                                    Facebook
                                </button>
                                <button className="btn_social btn_google">
                                    <img src=".\img\google_icon.png" alt="Google" />
                                    Google
                                </button>
                            </div>
                        </div>
                        <div className="register-link">
                            Bạn mới biết đến Hamster King?
                            <Link to="/registerPage">Đăng ký</Link></div>
                    </form>

                </div>
            </div>
        </main>
    );
}

export default MainContentLoginPage;
