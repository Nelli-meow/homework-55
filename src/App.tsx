import {useState} from "react";
import './App.css';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger.tsx";


const App = () => {
    const [burgerIngredients, setBurgerIngredients] = useState([
        { name: 'Meat', count: 0, price: 80 },
        { name: 'Cheese', count: 0, price: 50 },
        { name: 'Salad', count: 0, price: 10 },
        { name: 'Bacon', count: 0, price: 60 },
    ]);

    return (
        <>
            <div className="main-burger-container">
                <Ingredients burgerIngredients={burgerIngredients} setBurgerIngredients={setBurgerIngredients} />
                <Burger ingredients={burgerIngredients} basePrice={30} />
            </div>
        </>
    );
};

export default App;
