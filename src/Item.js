import React, { useState } from 'react';


function Item(props) {
    const [cart, setCart] = useState(props.el)

    return (
        <a className="product-link">
            <div className="product">
                <img className='product__img' src={"./img/png/" + props.item.img} alt="" />
            </div>
            <div className="info">
                 <div className="namePrice">
                    <h2>{props.item.title}</h2>
                    <div className="price">
                        <span className="newPrice">{props.item.price}<small> ₽</small></span>
                        <span className="oldPrice">{props.item.oldPrice}</span>
                    </div>
                </div> 
                <div className="ratingBuy">
                    <div className="rating">
                        <img src="./img/svg/rating.svg" alt="rating" />
                        <p className="rating_score">{" " + props.item.rate}</p>
                    </div>
                    <div className='info_price'>
                        <button className="addToCart">
                            Купить
                        </button>
                    </div>
                </div>
            </div> 
        </a>   
    );}


export default Item;