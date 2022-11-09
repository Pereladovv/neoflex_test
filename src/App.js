import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
    const earpods = [
        {
            id: 1,
            img: "byz_s852i.png",
            title: "Apple BYZ S852I",
            price: 2927,
            oldPrice: 3522 + " " + "₽",
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
            img: "byz_s852i.png",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7,
        },
        {
            id: 5,
            img: "earpods1.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        },
        {
            id: 6,
            img: "earpods2.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5,
        }
        
    ]

    const airpods = [
        {
            id: 1,
            img: "airpods.png",
            title: "Apple AirPods",
            price: 9527,
            rate: 4.7,
        },
        {
            id: 2,
            img: "gh-04.png",
            title: "GERLAX GH-04",
            price: 6527,
            rate: 4.7,
        },
        {
            id: 3,
            img: "bo4.png",
            title: "BOROFONE BO4",
            price: 7527,
            rate: 4.7,
        }
    ]


  return (
    <div className='container'>
        <Header/>
        <Main earpods = {earpods} airpods = {airpods} />
        <Footer/>
    </div>
  );


}

export default App;
