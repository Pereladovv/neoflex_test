import React from 'react';

import ProductCard from './ProductCard';

function Main(props) {
    return (
            <main className="main">
                <section className="intro">
                    <div className="wrapper">
                        <h1 className="intro_title">
                            Наушники
                        </h1>
                        <div className="cards">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                </section>
            </main>
    );
}

export default Main;