import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CartService {
  items = [];//to store the array of current products in the current 
  constructor(private http: HttpClient) { }
   addToCart(product) {
    this.items.push(product);
  }//add the products in the cart

  getItems() {
    return this.items;
  }//return and get the items from the cart

  clearCart() {
    this.items = [];
    return this.items;
  }
  
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }//clear the cart
  

} 