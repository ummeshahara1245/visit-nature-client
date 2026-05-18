import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogs = [
        { id: 1, title: "Life is a beautiful journey not a destination", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img6.jpg", date: "May 05, 2026" },
        { id: 2, title: "Take only memories, leave only footprints", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img4.jpg", date: "May 02, 2026" },
        { id: 3, title: "Journeys are best measured in new friends", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img5.jpg", date: "April 28, 2026" },
        { id: 4, title: "Let’s start adventure with best tripo guides", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img1.jpg", date: "April 25, 2026" },
        { id: 5, title: "Enjoying the beauty of the great nature", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img65.jpg", date: "April 20, 2026" },
        { id: 6, title: "Someday I’m going to be free and travel", img: "https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img3.jpg", date: "April 15, 2026" }
    ];

    return (
        <div className="blog-container py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-success fw-bold text-uppercase tracking-wider">Latest News</h6>
                    <h2 className="display-5 fw-bold">Our Recent <span className="text-success">Blog</span></h2>
                    <div className="mx-auto bg-success mt-2" style={{ width: '60px', height: '3px' }}></div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {blogs.map(blog => (
                        <div className="col" key={blog.id}>
                            <div className="card h-100 border-0 shadow-sm blog-card">
                                <div className="position-relative overflow-hidden">
                                    <img src={blog.img} className="card-img-top blog-img" alt={blog.title} />
                                    <span className="position-absolute top-0 start-0 bg-success text-white px-3 py-1 m-3 rounded-pill small">
                                        Travel
                                    </span>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-2 text-muted small">
                                        <i className="far fa-calendar-alt me-2"></i> {blog.date}
                                        <i className="far fa-user ms-3 me-2"></i> Admin
                                    </div>
                                    <h5 className="card-title fw-bold mb-3">{blog.title}</h5>
                                    <p className="card-text text-secondary mb-4">
                                        Praesent, risus adipisicing donec! Cras. Lobortis id aliquip taciti repudiandae porro dolore facere officia!
                                    </p>
                                    <button className="btn btn-outline-success btn-sm rounded-pill px-4 hover-filled">
                                        Read More <i className="fas fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;