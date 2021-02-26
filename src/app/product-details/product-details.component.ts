import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product;
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
   constructor(
    private route: ActivatedRoute,
      private cartService: CartService
  ) { }

  ngOnInit() {
   // get the routeparameter
    const routeParams=this.route.snapshot.paramMap;//snapshot to find the active route
    const routeIdfromRoute=Number(routeParams.get('productId'));//get the respective pid from url which is actively mapped

    //display respective productdetails from array
    this.product=products.find(product => product.id === routeIdfromRoute);



  }

}

