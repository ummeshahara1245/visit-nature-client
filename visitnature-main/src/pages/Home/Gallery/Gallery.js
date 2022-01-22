import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (

        <div>
            <div className="container">
                <h2 className="text-center m-5">OUR TOUR GALLERY</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col image">
                        <div class="">
                            <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1878484_Saint%20Martins%20Island%20Bangladesh.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>

                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKi5CGM9E0CZJFbrLcaGCP-ksDR-nUYbkBoA&usqp=CAU" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://www.sydney.com/sites/sydney/files/styles/open_graph/public/2019-10/164232.jpg?itok=u11dFkRJ" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://img.jakpost.net/c/2017/04/10/2017_04_10_24892_1491799434._large.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://media-eng.dhakatribune.com/uploads/2016/04/white-.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div><div class="col image">
                        <div class="">
                            <img src="https://cdn.pixabay.com/photo/2020/06/14/12/56/suspension-bridge-5297744_960_720.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://www.bdstall.com/asset/magazine-image/922_giant.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                    <div class="col image">
                        <div class="">
                            <img src="https://observerbd.com/2020/11/01/observerbd.com_1604164347.jpg" class="card-img-top" alt="..." />
                            <button title="like" className="btn-love"><i class="fas fa-heart"></i></button>
                            <button title="add to favourite" className="btn-fav"><i class="fas fa-star"></i></button>
                            <button title="share" className="btn-share"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;