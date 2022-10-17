import React from 'react';

function ProductCard(props) {
    return (
        <div className="productCard">
            <div className="product">
                <img src="./img/png/Apple_BYZ_S852I.png" alt="Apple_BYZ_S852I" />
            </div>
            <div className="info">
                <div className="namePrice">
                    <h3>Apple BYZ S852I</h3>
                    <span className="price">2927<small> ₽</small></span>
                </div>
                <div className="ratingBuy">
                    <div className="rating">
                        <img src="./img/svg/rating.svg" alt="rating" />
                        <p className="rating_score">4.7</p>
                    </div>
                    <div className='info_price'>
                        <button className="addToCart">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;