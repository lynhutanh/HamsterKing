import React, { useState } from 'react';
import './MainContentBlogPage.component.css';
import postsData from './PostData';
import { Link } from 'react-router-dom';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`page-number ${currentPage === i ? 'active' : ''}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            <button
                className="prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                className="next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

const MainContentBlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;
    const totalPages = Math.ceil(postsData.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPosts = (category) => {
        const filteredPosts = postsData.filter(post => post.category === category);
        const startIndex = (currentPage - 1) * postsPerPage;
        const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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

    return (
        <main className="blogPage-main-content">
            <div className="banner-contact"></div>

            <div className="section-1">
            <Link to="/homePage" className='custom-link'><i class="fa-solid fa-house"></i></Link> &gt; Blog
            </div>
            <div className="section-2">
                <div className="recent-posts">
                    <h2>Recent blog posts</h2>
                    <div className="posts-grid">
                        {renderPosts('Recent')}
                    </div>
                </div>
                <div className="all-posts">
                    <h2>All blog posts</h2>
                    <div className="posts-grid">
                        {renderPosts('All')}
                    </div>
                </div>
            </div>
            <div className="pagination-container">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </main>
    );
};

export default MainContentBlogPage;
