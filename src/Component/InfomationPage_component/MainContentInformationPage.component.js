import React from 'react';
import './MainContentInformationPage.component.css';

const MainContentInformationPage = () => {
    return (
        <main className="main-content">
            <div className="section-1">
                <span>Trang chủ &gt; Trang thông tin tài khoản</span>
            </div>
            <div className="section-2">
                <div className="container">
                    <div className="titile">
                        <h1>THÔNG TIN KHÁCH HÀNG</h1>
                    </div>
                    <div className="content">
                        <div className="inforAccount">
                            <img src="/img/av.png" alt="" className='avatar' />
                            <p className='nameAccount' id='nameAccount'>ABCXYZ</p>
                            <p className='emailAccount 'id='emailAccount'>abc@gmail.com</p>
                        </div>
                        <form action=""className='formInfoAccount'>
                            <div className="form-group">
                                <label htmlFor="fullName">HỌ VÀ TÊN <span>*</span></label>
                                <input id='fullName' type="text"className='fullName' placeholder='Your Full Name' />
                            </div>
                            <div className="form-group">
                            <label htmlFor="userName">TÊN ĐĂNG NHẬP<span>*</span></label>
                            <input id='userName' type="text"className='userName' placeholder='userName' />
                            </div>
                            <div className="form-group">
                            <label htmlFor="phoneNumber">SÓ ĐIỆN THOẠI <span>*</span></label>
                            <input id='numberPhone' type="text"className='phoneNumber' placeholder='Phone Number' />
                            </div>
                            <div className="form-group">
                            <label htmlFor="location">ĐỊA CHỈ GIAO HÀNG MẶC ĐỊNH <span>*</span></label>
                            <textarea  name="" id="address"className='location' placeholder='Your address'></textarea>                            </div>
                            <button className='btn-edit'>CHỈNH SỬA</button>
                        </form>
                    </div>
                </div>
                <div className="icon">
                <img src="/img/hamster_trang chủ.png" className='icon' alt="" />

                </div>
            </div>
        </main>
    );
};

export default MainContentInformationPage;
