import Checkout from "../models/Checkout.js";

interface DrinksOrder{
    softDrink(quantity: number): Checkout;
}

export default DrinksOrder;