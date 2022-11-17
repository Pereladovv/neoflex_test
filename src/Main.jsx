import React from 'react';

import Cart from './Cart';
import Headphones from './titles/Headphones';
import WirelessHeadphones from './titles/WirelessHeadphones';

function Main(props) {
    
    return (
            <main className="main">
                    <Headphones />
                    <div className="products-wrapper">
                        {props.earpods.map(el => (
                            <Cart key={el.id} item={el}/> 
                        ))}
                    </div>
                    <WirelessHeadphones />
                    <div className="products-wrapper">                    
                        {props.airpods.map(elem => (
                            <Cart key={elem.id} item={elem}/> 
                        ))}
                    </div>
            </main>
    );
}

export default Main;