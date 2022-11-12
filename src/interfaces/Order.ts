import {Size} from "../enums/Size.js";

interface Order{

}

interface SizeOrder {
    size(size: Size): StyleOrder;   
}

interface StyleOrder{
    vegan(): StyleQuantityOrder;
    meat(): StyleQuantityOrder;
}

interface StyleQuantityOrder{
    quantity(quantity: number): DrinksOrder;
}

interface DrinksOrder{
    softDrink(quantity: number): Checkout;
}