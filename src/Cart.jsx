import React, { useState } from 'react';


function Cart(props) {
    const [cart, setCart] = useState(props.item)


/* Вызываем метод map, который проходится по массиву и на основе этого прохода формирует новый массив */
/*     const products = cart.map((product) => {
        return 
    }) */

    return (
        <a className="productLink">
            <div className="product">
                <img className='productImg' src={"./img/png/" + props.item.img} alt="" />
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
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
                        </svg>
                        <p className="ratingScore">{" " + props.item.rate}</p>
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


export default Cart;