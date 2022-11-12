import StyleQuantityOrder from './StyleQuantityOrder.js';

interface StyleOrder{
    vegan(): StyleQuantityOrder;
    meat(): StyleQuantityOrder;
}

export default StyleOrder;