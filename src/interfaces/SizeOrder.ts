import { Size } from "../enums/Size.js";
import StyleOrder from "./StyleOrder.js";

interface SizeOrder {
    size(size: Size): StyleOrder;
}

export default SizeOrder;