import * as React from 'react';
import './Ingredients.css';
import meatImage from '../../assets/meat.png';
import saladImage from '../../assets/salad.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';
import {useState} from "react";
import DeleteButtons from "../DeleteButtons/DeleteButtons.tsx";

type Ingredient = {
    name: string;
    price: number;
    image: string;
}

const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},

];

const Ingredients: React.FC = () => {
    const  [burgerIngredients, setBurgerIngredients] = useState<{name: string; count: number}[]>([
        { name: 'Meat', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Salad', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);
    const [cost, setCost] = useState(0);

    const addIngredient = (ingredientIndex: number) => {
        setBurgerIngredients(prevIngredients =>
            prevIngredients.map((ing, index) =>
                index === ingredientIndex ? { ...ing, count: ing.count + 1 } : ing
            )
        );
        setCost(prevCost => prevCost + INGREDIENTS[ingredientIndex].price);
    };

    const deleteIngredient = (ingredientIndex: number) => {
        setBurgerIngredients(prevIngredients =>
            prevIngredients.map((ing, index) =>
                index === ingredientIndex && ing.count > 0 ? { ...ing, count: ing.count - 1 } : ing
            )
        );
        setCost(prevCost => {
            const ingredientPrice = INGREDIENTS[ingredientIndex].price;
            return prevCost - ingredientPrice >= 0 ? prevCost - ingredientPrice : 0;
        });
    };

    return (
        <div className="ingredients-container">
            <h3>Ingredients:</h3>
            {INGREDIENTS.map((ingredient, index) => (
                <div className="ingredients-block" key={ingredient.name}>
                    <button
                        type="button"
                        className="ingredients-button"
                        onClick={() => addIngredient(index)}
                    >
                        <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="ingredient-image"
                        />
                        <h3 className="ingredients-title">{ingredient.name}</h3>
                    </button>
                    <p className="ingredients-price">Price: {ingredient.price}</p>
                    <span className="ingredients-count">
                        × {burgerIngredients[index].count}
                    </span>
                    <DeleteButtons onClick={() => deleteIngredient(index)}/>
                </div>
            ))}
        </div>
    );
};

export default Ingredients;