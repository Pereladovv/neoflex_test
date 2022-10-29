import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React, { useState } from 'react';


function App() {
    const items = [
        {
            id: 1,
            img: "byz_s852i.png",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7,
        },
        {
            id: 2,
            img: "earpods1.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id: 3,
            img: "earpods2.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id: 4,
            img: "earpods2.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id: 5,
            img: "airpods.png",
            title: "Apple AirPods",
            price: 9527,
            rate: 4.7,
        },
        {
            id: 6,
            img: "gh-04.png",
            title: "GERLAX GH-04",
            price: 6527,
            rate: 4.7,
        },
        {
            id: 7,
            img: "bo4.png",
            title: "BOROFONE BO4",
            price: 7527,
            rate: 4.7,
        },
        {
            id: 8,
            img: "bo4.png",
            title: "BOROFONE BO4",
            price: 7527,
            rate: 4.7,
        }
    ]

    const orders = []
    const [order, setOrder] = useState()

    /* Функция добавления заказа */
    function addToOrder(item) {
        setOrder({orders: [...order.orders, item]})
      }
      
    addToOrder = addToOrder.bind(this);

  return (
    <div className='wrapper'>
        <Header/>
        <Main headphones = {items} onAdd={addToOrder}/>
        <Footer/>
    </div>
  );


}

export default App;
