import React from 'react';

import Item from './Item';

function Main(props) {
    
    return (
            <main className="main">

                 <section className="intro">
                    <div className="wrapper">
                        <h1 className="intro_title">
                            Наушники
                        </h1>
                        <div className="cards">
                            {props.headphones.map(el => (
                                <Item key={el.id} item={el} /> 
                            ))}
                        </div>
                    </div>
                </section>
            </main>
    );
}

export default Main;