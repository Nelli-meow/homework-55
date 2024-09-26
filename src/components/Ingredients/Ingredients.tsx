import * as React from 'react';
import './Ingredients.css';
import meatImage from '../../assets/meat.png';
import saladImage from '../../assets/salad.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';

type Ingredient = {
    name: string;
    price: number;
    image: string;
}

const IngredientArray: Ingredient[] = [

    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},

];

const Ingredients: React.FC = () => {
    return (
        <div className="ingredients-container">
            {IngredientArray.map((ingredient) => (
                <div className="ingredients-block" key={ingredient.name}>
                    <img src={ingredient.image} alt={ingredient.name} className="ingredient-image" />
                    <h3>{ingredient.name}</h3>
                    <p>Price: {ingredient.price}</p>
                    <span>selected:</span>
                </div>
            ))}
        </div>
    );
};

export default Ingredients;