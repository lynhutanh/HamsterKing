import React, { useState } from 'react';
import './MainContentCartPage.component.css';
import CartItem from './CartItem.component';
import { useCart } from '../CartContext.component/CartContext.component';
import { Link } from 'react-router-dom';


const MainContentCartPage = () => {
  const { cart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Handle the actual checkout logic here
    console.log('Checkout confirmed');
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <main className="Cart-main-content">
      <div className="section-1">
        <Link to="/homePage" className='custom-link'>Trang chủ</Link> &gt; Giỏ hàng
      </div>
      <div className="section-2">
        <div className="content-left">
          <div className="info-cart">
            <div className="title-cart">
              <h1>THÔNG TIN GIỎ HÀNG</h1>
            </div>
            <div className="cards-cart">
              {cart.items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  imgSrc={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="checkout-section">
            <h2>THANH TOÁN</h2>
            <div className="summary">
              <div className="total-items">
                <span className='title-item'>Tổng sản phẩm:</span>
                <span className='totalQuantity'>{totalQuantity}</span>
              </div>
              <div className="total-price">
                <span className='title-item'>Tổng tiền cần thanh toán:</span>
                <span className='totalPrice'>{totalPrice.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
            <button class="Btn" onClick={handleCheckout}>
              THANH TOÁN
              <svg viewBox="0 0 576 512" class="svgIcon">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
          </div>
          <div className="order-info">
            <h2>THÔNG TIN ĐẶT HÀNG</h2>
            <div className="customer-info">
              <div>
                <span className='title-item'>Thông tin người nhận:</span>
                <span>ABCXYZ</span>
              </div>
              <div>
                <span className='title-item'>Số điện thoại người nhận:</span>
                <span>012345789</span>
              </div>
              <div>
                <span className='title-item'>Địa chỉ giao hàng:</span>
                <span>1234/5/6, Nguyễn Văn Lượng</span>
              </div>
              <div>
                <span className='title-item'>Ghi chú:</span>
                <span>Đối diện quán massage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <div className="confirmation-dialog-content">
            <h2>Xác nhận thanh toán</h2>
            <p>Bạn có chắc chắn muốn thanh toán?</p>
            <button onClick={handleConfirm} className="btn_confirm">Xác nhận</button>
            <button onClick={handleCancel} className="btn_cancel">Hủy</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContentCartPage;
