import React from 'react';

import Item from './Item';
import Headphones from './titles/Headphones';
import WirelessHeadphones from './titles/WirelessHeadphones';

function Main(props) {
    
    return (
            <main className="main">
                    <Headphones />
                    <div className="products-wrapper">
                        {props.earpods.map(el => (
                            <Item key={el.id} item={el}/> 
                        ))}
                    </div>
                    <WirelessHeadphones />
                    <div className="products-wrapper">                    
                        {props.airpods.map(elem => (
                            <Item key={elem.id} item={elem}/> 
                        ))}
                    </div>
            </main>
    );
}

export default Main;