import OrderFluent from "../api/OrderFluent";
import Bread from "../models/Bread.js"
abstract class Order{
    public static bread(bread: Bread): Bread{
        return new OrderFluent(bread);
    }

}