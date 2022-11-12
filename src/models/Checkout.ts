import Sandwish from "./Sandwish.js";
import Drink from "./Drink.js";
import DrinkQuantity from "./DrinkQuantity.js";

class Checkout {
    private _sandwish: Sandwish;
    private _quantity: number;
    private _drink: Drink;
    private _drinkQuantity: DrinkQuantity;
    private _total: number;


    public constructor(sandwich: Sandwish, quantity: number, drink: Drink, drinkQuantity: DrinkQuantity, total: number){
        this._sandwish = sandwich;
        this._quantity = quantity;
        this._drink = drink;
        this._drinkQuantity = drinkQuantity;
        this._total = total;
    }

    get sandwish(): Sandwish{
        return this._sandwish;
    }

    get quantity(): number{
        return this._quantity;
    }

    get drink(): Drink{
        return this._drink;
    }

    get drinkQuantity(): DrinkQuantity{
        return this._drinkQuantity;
    }

    get total(): number{
        return this._total;
    }
}

export default Checkout;