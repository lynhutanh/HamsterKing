import React, { useEffect, useState, useRef } from 'react';
import './MainContentHomePage.component.css';
import OfferCard from './OfferCard';
import ServiceCard from './ServiceCard';
// import products from '../ProductPage_component/ProductData'; // Xóa dòng này
import postsData from '../BlogPage_component/PostData';

const services = [
  {
    id: 1,
    imageUrl: '/img/hompage_1.png',
    title: 'Chăm sóc y tế',
    description: 'Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.',
    iconClass: 'fa-solid fa-stethoscope'
  },
  {
    id: 2,
    imageUrl: '/img/homepage_2.png',
    title: 'Chăm sóc và huấn luyện',
    description: 'Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.',
    iconClass: 'fa-solid fa-dog'
  },
  {
    id: 3,
    imageUrl: '/img/homepage_3.png',
    title: 'Nơi ở và bảo mẫu',
    description: 'Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.',
    iconClass: 'fa-solid fa-house-user'
  },
  {
    id: 4,
    imageUrl: '/img/homepage_4.png',
    title: 'Thức ăn và đồ chơi',
    description: 'Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.',
    iconClass: 'fa-solid fa-bone'
  }
];

const statistics = [
  {
    id: 1,
    value: '180',
    description: 'Đánh giá tích cực',
    icon: 'fa-solid fa-thumbs-up',
    color: 'blue'
  },
  {
    id: 2,
    value: '68+',
    description: 'Sản phẩm',
    icon: 'fa-solid fa-box',
    color: 'orange'
  },
  {
    id: 3,
    value: '28+',
    description: 'Chuyên gia',
    icon: 'fa-solid fa-user-tie',
    color: 'green'
  }
];

const renderPosts = (category) => {
  const filteredPosts = postsData.filter(post => post.category === category);
  const currentPosts = filteredPosts.slice(0, 4);  

  return currentPosts.map(post => (
    <div className="post-item" key={post.title}>
      <img src={post.image} alt={post.title} />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span>{post.author} &bull; {post.date}</span>
        <a href={post.link}>Read more</a>
      </div>
    </div>
  ));
};

const MainContentHomePage = () => {
  const [products, setProducts] = useState([]); // Thêm state products
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const sectionsRef = useRef([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://apis-1d85.onrender.com/product/get-all-product');
        const data = await response.json();
        setProducts(data); // Cập nhật state products với dữ liệu từ API
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const currentSections = sectionsRef.current;

    currentSections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + cardsPerPage < products.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <main className="homePage-main-content">
      <div className="section-1 hidden" ref={el => sectionsRef.current[0] = el}>
        <div className="content-left">
          <div className="container">
            <img src="/img/hamster_trang chủ.png" alt="Hamster" />
          </div>
        </div>
        <div className="content-right">
          <div className="section-top">
            <h1>"Nơi tốt nhất để mua các sản phẩm chất lượng cao cho hamster của bạn."</h1>
          </div>
          <div className="section-down">
            <div className="search-bar">
              <div className="input-container">
                <input type="text" id="input-find" placeholder="Bạn đang tìm kiếm gì?" />
                <i className="fa fa-search"></i>
              </div>
              <button className="search-button" id="btn-search">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 hidden" ref={el => sectionsRef.current[1] = el}>
        <div className="section-2-header">
          <h1>SẢN PHẨM MỚI</h1>
        </div>
        <div className="section-2-nav">
          <button onClick={handlePrev} className="nav-button prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="card-container">
            {products.slice(currentIndex, currentIndex + cardsPerPage).map((product) => (
              <OfferCard
                key={product.mProductId}
                title={product.mProductName}
                imageUrl={product.mProductImage}
                specialOffer={product.specialOffer}
                buttonLabel="Mua ngay" // Thêm nhãn nút
              />
            ))}
          </div>
          <button onClick={handleNext} className="nav-button next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="section-3 hidden" ref={el => sectionsRef.current[2] = el}>
        <div className="title-section-3"><h2>DỊCH VỤ</h2></div>
        <div className="service-card-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              iconClass={service.iconClass}
            />
          ))}
        </div>
      </div>
      <div className="section-4 hidden" ref={el => sectionsRef.current[3] = el}>
        <div className="statistics-card-container">
          {statistics.map((stat) => (
            <div key={stat.id} className="statistics-card">
              <i className={`${stat.icon}`} style={{ color: stat.color }}></i>
              <div className="statistics-value">{stat.value}</div>
              <div className="statistics-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-5 hidden" ref={el => sectionsRef.current[4] = el}>
        <div className="title-section-3"><h2>TIN TỨC</h2></div>
        <div className="recent-posts">
          <h2>Recent blog posts</h2>
          <div className="posts-grid">
            {renderPosts('Recent')}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContentHomePage;
