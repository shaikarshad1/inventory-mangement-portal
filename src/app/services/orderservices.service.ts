import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderservicesService {
  orderUrl="http://localhost:8082"
  

  constructor(private httpcliet:HttpClient) { }


  addOrder(addOrd:Order){
    return this.httpcliet.post<any>(this.orderUrl+"/addOrder",addOrd)
  }

  getAllOrders(){
    return this.httpcliet.get<Order[]>(this.orderUrl+"/allOrders")
  }

  editOrder(editOrd:Order,id:number){
    return this.httpcliet.put<any>(this.orderUrl+"/modifyOrder/"+id,editOrd)
  }

  getOrderByUserId(userid:string | null){
    return this.httpcliet.get<Order[]>(this.orderUrl+"/getOrde/"+userid)
  }

  getOrdernyID(id:number){
    return this.httpcliet.get<Order>(this.orderUrl+"/getid/"+id)
  }

}
