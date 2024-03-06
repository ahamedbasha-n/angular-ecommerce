import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllCategory() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.METHOD.GET_ALL_CATEGORY);
  }
}
