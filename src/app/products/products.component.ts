import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productObj ={
    "productId": "",
    "productName": "",
    "quantity": 0,
    "isActive": true
  };

  categoryList:any[]=[];

  constructor(private productSrv:ProductService){
    
  }
  ngOnInit(): void {
      this.getAllCategory();
  }
  getAllCategory(){
    this.productSrv.getAllCategory().subscribe(res:any)=>{
      this.categoryList = res.data;
    }
  }
}
