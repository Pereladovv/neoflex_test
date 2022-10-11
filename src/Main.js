import React from 'react';

function Main(props) {
    return (

            <main className="main">
                <section className="intro">
                    <div className="wrapper">
                        <h1 className="intro_title">
                            Наушники
                        </h1>
                        <div className="productCard">
                                <div className="product">
                                    <img src="./img/png/Apple_BYZ_S852I.png" alt="" />
                                </div>
                                <div className="info">
                                    <h3>Название товара</h3>
                                    <div className="rating">
                                        <img src="./img/svg/rating.svg" alt="rating" />
                                        <p className="rating-score">4.7</p>
                                    </div>
                                    <div>
                                        <span className="price">2927<small>₽</small></span>
                                        <button className="add-to-cart">Купить</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </main>

    );
}

export default Main;