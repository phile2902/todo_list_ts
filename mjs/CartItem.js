"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    showCartItemInHTML(index) {
        return ``;
    }
    getSubtotal() {
        return this.product.price * this.quantity;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(v) {
        this._quantity = v;
    }
    get product() {
        return this._product;
    }
    set product(v) {
        this._product = v;
    }
}
exports.CartItem = CartItem;
