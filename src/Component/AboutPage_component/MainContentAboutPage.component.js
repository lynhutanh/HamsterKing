import React from 'react';
import { Link } from 'react-router-dom';

import './MainContentAboutPage.component.css';

const MainContentAboutPage = () => {
    return (
        <main className="aboutPage-main-content">
            <div className="section-1">
            <Link to="/homePage" className='custom-link'><i class="fa-solid fa-house"></i></Link> &gt; Về chúng tôi
            </div>
            <div className="section-2">
                <h1>GIỚI THIỆU VỀ CHÚNG TÔI</h1>
            </div>
            <div className="section-3">
            <div className="content-left">
                    <h1>Xin chào các bạn !</h1>
                    <p>
                    Chào mừng bạn đến với Hamster King, 
                    địa chỉ tin cậy dành cho những ai yêu thích và 
                    chăm sóc chuột hamster tại Thành phố Hồ Chí Minh. 
                    Tại Hamster King, chúng tôi không chỉ cung cấp
                     những chú chuột hamster đáng yêu, khỏe mạnh mà 
                     còn có đầy đủ các phụ kiện cần thiết để chăm sóc và 
                     nuôi dưỡng vật cưng của bạn.
                    </p>
                    <p>
                    Với slogan “Chọn Hamster King - trao niềm tin đến 
                    với vật yêu của bạn,” chúng tôi 
                    cam kết mang đến cho bạn và vật 
                    cưng của bạn những sản phẩm chất lượng 
                    cao và dịch vụ tốt nhất. Hãy đến với Hamster
                     King để trải nghiệm và cảm nhận sự khác biệt
                      trong từng chi tiết nhỏ nhất. Chúng tôi luôn 
                      sẵn sàng tư vấn và hỗ trợ bạn mọi lúc, mọi nơi.
                    </p>
                    <p>
                    Địa chỉ: Thành phố Hồ Chí Minh
                    Hamster King - Nơi niềm tin và tình yêu dành cho vật cưng của 
                    bạn được đặt lên hàng đầu.
                    </p>
                </div>
                <div className="content-right">
                    <img src="/img/logo_hamster.png" alt="" />
                </div>
            </div>
        </main>
    );
};

export default MainContentAboutPage;
