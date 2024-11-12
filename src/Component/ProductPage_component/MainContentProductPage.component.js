import React, { useState, useEffect } from 'react';
import './MainContentProductPage.component.css';
import FilterDropdown from './FilterDropdown';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const MainContentProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showInforCard, setShowInforCard] = useState(false); // Initially false
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowInforCard(true);
  };

  const handleConfirmBuyNow = () => {
    console.log('Checkout confirmed');
    setShowInforCard(false);
  };

  const handleCancelBuyNow = () => {
    setShowInforCard(false);
    setSelectedProduct(null); // Clear selected product on cancel
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://apis-1d85.onrender.com/product/get-all-product');
        const data = await response.json();
        console.log(data); // Log dữ liệu để kiểm tra
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const chunkProducts = (items, chunkSize) => {
    return Array.from({ length: Math.ceil(items.length / chunkSize) }, (_, index) =>
      items.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  };

  const productChunks = chunkProducts(products, 4);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(productChunks.length / rowsPerPage);

  const currentChunks = productChunks.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <main className="productPage-main-content">
      <div className="section-1">
        <div className="content-left">
          <Link to="/homePage" className='custom-link'><i className="fa-solid fa-house"></i></Link> &gt; Danh mục
        </div>
        <div className="content-middle">
          <div className="input-container">
            <input type="text" id="input-find" placeholder="Bạn đang tìm kiếm gì?" />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div className="content-right">
          <FilterDropdown />
        </div>
      <div className="section-2">
        <div className="product-section">
          {currentChunks.map((chunk, rowIndex) => (
            <div className="product-row" key={rowIndex}>
              {chunk.map((product) => (
                <ProductCard
                  key={product.mProductId}
                  image={product.mProductImage}
                  name={product.mProductName}
                  price={product.mProductPrice}
                  handleBuyNow={() => handleBuyNow(product)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousClick} className="prev-button">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNextClick} className="next-button">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="pagination">
        {renderPageNumbers()}
      </div>
      {
        showInforCard && selectedProduct && (
          <div className="buyNow-dialog">
            <div className="buyNow-dialog-content">
              <h2>Thông tin chi tiết</h2>
              <div className="content-card">
                <div className="content-card-left">
                <img src={selectedProduct.mProductImage} alt={selectedProduct.mProductName} />

                </div>
                <div className="content-card-right">
                <h3>{selectedProduct.mProductName}</h3>
                <p><span>Giá:</span> {selectedProduct.mProductPrice}</p>
                <p><span>Review:</span> {selectedProduct.mProductDescription}</p>
                </div>
              </div>
              <button onClick={handleConfirmBuyNow} className='btn-confirmBuyNow'>Mua ngay</button>
              <button onClick={handleCancelBuyNow} className='btn-cancelBuyNow'>Hủy</button>
            </div>
          </div>
        )
      }
    </main>
  );
};

export default MainContentProductPage;
