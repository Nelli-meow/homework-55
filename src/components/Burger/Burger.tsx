import * as React from 'react';
import './Burger.css';

interface Ingredient {
    price: number;
    name: string;
    count: number;
}

interface BurgerProps {
    ingredients: Ingredient[];
    basePrice: number;
}

const Burger: React.FC<BurgerProps> = ({ingredients, basePrice}) => {
    const totalPrice = ingredients.reduce((acc, ingredient) => {
        return acc + (ingredient.count > 0 ? ingredient.count * ingredient.price : 0);
    }, basePrice);

    return (
        <div className="burger-block">
            <h3 className="burger-name">Burger</h3>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>

                {ingredients.map((ingredient) => {
                    const ingredientDivs = [];
                    for (let i = 0; i < ingredient.count; i++) {
                        ingredientDivs.push(<div key={i} className={ingredient.name}></div>);
                    }
                    return ingredientDivs;
                })}

                <div className="BreadBottom"></div>
            </div>

            <span className="burger-price">Price: {totalPrice}</span>
        </div>
    );
};

export default Burger;
