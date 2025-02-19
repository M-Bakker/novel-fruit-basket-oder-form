import './App.css'
import React, {useState} from "react";
import Counter from "./componets/Counter.jsx";
import Orderform from "./componets/Orderform.jsx";
import ResetCounter from "./componets/ResetCounter.jsx";

function App() {
    const [fruitCounts, setFruitCounts] = useState({
        aardbeien: 0,
        appels: 0,
        bananen: 0,
        kiwi: 0,
    });

    const setCount = (fruit, newCount) => {
        setFruitCounts(prevCounts => ({
            ...prevCounts,
            [fruit]: newCount,
        }));
    };

    const fruitEmojis = {
        aardbeien: "🍓",
        appels: "🍎",
        bananen: "🍌",
        kiwi: "🥝",
    };

    return (
        <>
            <header>
                <img src="src/assets/screenshot-logo.png" alt="logo"/>
            </header>
            <div className="fruit-section">
                {Object.keys(fruitCounts).map(fruit => (
                    <>
                        <div className="fruit-box">
                            <h2>{fruitEmojis[fruit]} {fruit.charAt(0).toUpperCase() + fruit.slice(1)}</h2>
                            <Counter key={fruit}
                                     fruit={fruit}
                                     count={fruitCounts[fruit]}
                                     setCount={setCount}
                            />
                        </div>
                    </>
                ))}
            </div>
            <ResetCounter fruitCounts={fruitCounts} setCount={setCount}/>
            <div className="order-form">
                <Orderform fruitCounts={fruitCounts}/>
            </div>
        </>
    )
}

export default App
