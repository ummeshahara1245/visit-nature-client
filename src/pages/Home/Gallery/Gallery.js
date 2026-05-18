import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [likedItems, setLikedItems] = useState({});
    // শুরুতে ৮টি ছবি দেখানোর জন্য স্টেট
    const [visible, setVisible] = useState(8);

    const handleLike = (index) => {
        setLikedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleShare = (title, url) => {
        if (navigator.share) {
            navigator.share({ title, url }).catch(console.error);
        } else {
            alert("Sharing not supported in this browser. Link: " + url);
        }
    };

    // See More বাটনে ক্লিক করলে আরও ৪টি করে ছবি বাড়বে
    const showMoreImages = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    const images = [
        "https://wallpaperaccess.com/full/9508595.jpg",

        "https://tse2.mm.bing.net/th/id/OIP.QLqlNgVErmQAIIjUHrtJ7wHaEo?pid=Api&h=220&P=0",

        "https://media.istockphoto.com/id/1216608304/photo/kuakata-sea-beach.jpg?b=1&s=170667a&w=0&k=20&c=guV28EJz94OKZ70j-Mz6A5NHjOEJggzdDgVxK0F__7A=",

        "https://images.pexels.com/photos/30615807/pexels-photo-30615807.jpeg",

        "https://vromonguide.com/wp-content/uploads/nilgiri-travel-guide-770x420.jpg",

        "https://vromonguide.com/wp-content/uploads/nafakhum-bandarban-770x420.jpg",

        "https://plus.unsplash.com/premium_photo-1707554248739-0476b49c9055?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D",

        "https://images.unsplash.com/photo-1719404364541-e917c6c7ef4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.pexels.com/photos/34216670/pexels-photo-34216670.jpeg",
        "https://images.pexels.com/photos/28530158/pexels-photo-28530158.jpeg",
        "https://images.unsplash.com/photo-1513517860393-d9bf0651bed8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://tse1.mm.bing.net/th/id/OIP.wMMr28TtDW_2ag1jZZ367gHaE5?pid=Api&h=220&P=0",
        "https://tse3.mm.bing.net/th/id/OIP.SkZK6gx15qdYJRA8p1JTRgHaGG?pid=Api&h=220&P=0",
        "https://png.pngtree.com/background/20230516/original/pngtree-river-with-rocks-and-clear-water-picture-image_2611088.jpg",
        "https://images.pexels.com/photos/37140150/pexels-photo-37140150.jpeg",





    ];

    return (
        <div className="gallery-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h6 className="text-success fw-bold text-uppercase">Memories</h6>
                    <h2 className="fw-bold">OUR TOUR GALLERY</h2>
                    <div className="mx-auto bg-success mt-2" style={{ width: '60px', height: '3px' }}></div>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {/* slice(0, visible) ব্যবহার করে নির্দিষ্ট সংখ্যক ছবি দেখানো হচ্ছে */}
                    {images.slice(0, visible).map((imgUrl, index) => (
                        <div className="col" key={index}>
                            <div className="gallery-card shadow-sm border-0 position-relative overflow-hidden rounded-3">
                                <img src={imgUrl} className="gallery-img w-100" alt="Tour" style={{ height: '250px', objectFit: 'cover' }} />

                                <div className="gallery-overlay d-flex justify-content-center align-items-center">
                                    <button
                                        onClick={() => handleLike(index)}
                                        className={`btn-action love-btn ${likedItems[index] ? 'active' : ''}`}
                                        title="Like"
                                    >
                                        <i className={`fa-heart ${likedItems[index] ? 'fas' : 'far'}`}></i>
                                    </button>

                                    <button
                                        onClick={() => handleShare("Amazing Tour Image", imgUrl)}
                                        className="btn-action share-btn"
                                        title="Share"
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* যদি আরও ছবি বাকি থাকে তবেই বাটনটি দেখাবে */}
                {visible < images.length && (
                    <div className="text-center mt-5">
                        <button
                            onClick={showMoreImages}
                            className="btn btn-success px-5 py-2 rounded-pill fw-bold shadow-sm hover-effect"
                        >
                            See More Photos <i className="fas fa-images ms-2"></i>
                        </button>
                    </div>
                )}

                {visible >= images.length && images.length > 8 && (
                    <p className="text-center text-muted mt-4">That's all for now!</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;