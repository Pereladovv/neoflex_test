import React from 'react';


function Item(props) {

    return (
            <div className="productCard">
                <div className="product">
                    <img src={"./img/png/" + props.item.img} alt="Apple_BYZ_S852I" />
                </div>
            <div className="info">
                 <div className="namePrice">
                    <h2>{props.item.title}</h2>
                    <span className="price">{props.item.price}<small> ₽</small></span>
                </div> 
                <div className="ratingBuy">
                    <div className="rating">
                        <img src="./img/svg/rating.svg" alt="rating" />
                        <p className="rating_score">{" " + props.item.rate}</p>
                    </div>
                    <div className='info_price'>
                        <button className="addToCart">Купить</button>
                    </div>
                </div>
            </div> 
        </div>   
    );}


export default Item;