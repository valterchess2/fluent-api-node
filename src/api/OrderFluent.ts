import DrinksOrder from "../interfaces/DrinkOrder.js";
import SizeOrder  from "../interfaces/SizeOrder.js";
import StyleOrder from "../interfaces/StyleOrder.js";
import StyleQuantityOrder from "../interfaces/StyleQuantityOrder.js";
import Bread from "../models/Bread.js";
import PricingTables from "../enums/PricingTables.js";

class OrderFluent implements SizeOrder, StyleOrder, StyleQuantityOrder, DrinksOrder{
    private _pricingTables = PricingTables.INSTANCE;
    private _bread;
    constructor(bread: Bread){
        this._bread = bread;
    }
}

export default OrderFluent; 