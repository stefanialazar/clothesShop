import { Component, OnInit } from '@angular/core';
import { RequestService } from '../core/request.service';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user: any;
  constructor(private reqS: RequestService) { }
  products: any;
 
  ngOnInit(): void {

    this.reqS.get('https://localhost:44302/api/products').subscribe((res: any) => {
        this.products = res;
      
    })
    const token: any= localStorage.getItem("jwt");
    if(token){
      const tokenObject = this.decodeToken(token);
      var userId = tokenObject.id;
    }
    this.reqS.get('https://localhost:44302/api/users/' + userId).subscribe((data: any) => {
      this.user = data;
    })
    console.log(this.products);

        
  }
  checkIfCanBuy(product: any) {
    if(this.user == null) {
      return true;
    }
    if(this.user.points < product.pointsPrice) {
      return true;
    }
    else return false;

  }
  buyWithCash(product: any){
    const obj = {
      name: product.name,
      quantity: 0,
      price: product.price,
      pointsPrice: 0
    }
    if(this.user){

    this.reqS.put('https://localhost:44302/api/orders/addItemToCart', obj).subscribe(res => {
       console.log('Product added to shopping cart');
       Swal.fire('Product added!', 'Product added to the shopping cart', 'success');
    })
  }
  else Swal.fire('Login required', 'You need to be logged in to add a product to cart. If you do not have an account, please create one.', 'error');
  }
  buyWithPoints(product: any){
    const obj = {
      name: product.name,
      quantity: 0,
      price: 0,
      pointsPrice: product.pointsPrice
    }
    if(this.user){
    this.reqS.put('https://localhost:44302/api/orders/addItemToCart', obj).subscribe(res => {
       console.log('Product added to shopping cart');
       Swal.fire('Product added!', 'Product added to the shopping cart', 'success');
    })
    }
    else Swal.fire('Login required',
     'You need to be logged in to add a product to cart. If you do not have an account, please create one.', 'error');

  }
  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
