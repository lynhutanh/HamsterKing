import React, { useState } from 'react';
import './MainContentRegistrationPage.component.css';

const MainContentRegistrationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: '',
        rePassword: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        const newErrors = validateField(id, value);
        const updatedErrors = { ...errors, ...newErrors };
        if (Object.keys(newErrors).length === 0) {
            delete updatedErrors[id];
        }
        setErrors(updatedErrors);
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        const newErrors = validateField(id, value);
        const updatedErrors = { ...errors, ...newErrors };
        if (Object.keys(newErrors).length === 0) {
            delete updatedErrors[id];
        }
        setErrors(updatedErrors);
    };

    const validateField = (field, value) => {
        const newErrors = {};
        switch (field) {
            case 'fullName':
                if (!value) {
                    newErrors.fullName = 'Họ và tên là bắt buộc';
                }
                break;
            case 'userName':
                if (!value) {
                    newErrors.userName = 'Tên đăng nhập là bắt buộc';
                } else if (value.length < 6) {
                    newErrors.userName = 'Tên đăng nhập phải có ít nhất 6 ký tự';
                }
                break;
            case 'password':
                if (!value) {
                    newErrors.password = 'Mật khẩu là bắt buộc';
                } else if (value.length < 8) {
                    newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
                }
                break;
            case 'rePassword':
                if (value !== formData.password) {
                    newErrors.rePassword = 'Mật khẩu nhập lại không khớp';
                }
                break;
            case 'email':
                if (!value) {
                    newErrors.email = 'Email là bắt buộc';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Email không hợp lệ';
                }
                break;
            default:
                break;
        }
        return newErrors;
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            Object.assign(newErrors, validateField(field, formData[field]));
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, proceed with submission
            console.log('Form data:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <main className="registerPage-main-content">
            <div className="section_1">
                <h1>CHÀO MỪNG BẠN ĐẾN VỚI</h1>
                <h1>HAMSTER KING</h1>
            </div>
            <div className="section_2">
                <div className="content_left">
                    <form onSubmit={handleSubmit}>
                        <h3>ĐĂNG KÝ</h3>
                        <div className="form-group">
                            <label htmlFor="fullName">HỌ VÀ TÊN <span>*</span></label>
                            <div className="form">
                                <input
                                    className="input"
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="input-border"></span>
                            </div>
                            {errors.fullName && <p className="error">{errors.fullName}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="userName">TÊN ĐĂNG NHẬP <span>*</span></label>
                            <div className="form">
                                <input
                                    className="input"
                                    type="text"
                                    id="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="input-border"></span>
                            </div>
                            {errors.userName && <p className="error">{errors.userName}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">MẬT KHẨU <span>*</span></label>
                            <div className="form">
                                <input
                                    className="input"
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="input-border"></span>
                            </div>
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="rePassword">NHẬP LẠI MẬT KHẨU <span>*</span></label>
                            <div className="form">
                                <input
                                    className="input"
                                    type="password"
                                    id="rePassword"
                                    value={formData.rePassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="input-border"></span>
                            </div>
                            {errors.rePassword && <p className="error">{errors.rePassword}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">EMAIL <span>*</span></label>
                            <div className="form">
                                <input
                                    className="input"
                                    type="text"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <span className="input-border"></span>
                            </div>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <button type="submit" className="btn_regis">Đăng ký</button>
                        <button type="button" className="btn_login">Đăng nhập</button>
                    </form>
                </div>
                <div className="content-right">
                    <h3>ĐĂNG KÝ TẠI ĐÂY NHÉ</h3>
                    <img src="/img/hamster_trang chủ.png" alt="Hamster" />
                </div>
            </div>
        </main>
    );
}

export default MainContentRegistrationPage;
