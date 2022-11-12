import DrinksOrder from "./DrinkOrder";

interface StyleQuantityOrder {
    quantity(quantity: number): DrinksOrder;
}

export default StyleQuantityOrder;