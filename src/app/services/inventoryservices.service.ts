import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Inventory } from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryservicesService {
  invUrl="http://localhost:8083"

  constructor(private httpclient:HttpClient) { }

  addInventory(addInv:Inventory){
    return this.httpclient.post<any>(this.invUrl+"/addInventory",addInv);
  }

  getAllInv(){
    return this.httpclient.get<Inventory[]>(this.invUrl+"/allInventory");
  }

  updateInv(editInv:Inventory,mate:string){
    return this.httpclient.put<any>(this.invUrl+"/modifyInv/"+mate,editInv);
  }

  upadteInvByid(editIn:Inventory,id:number){
    return this.httpclient.put<any>(this.invUrl+"/inv/"+id,editIn)
  }

  getInvByMat(mate:string){
    return this.httpclient.get<Inventory[]>(this.invUrl+"/getInv/"+mate);
  }

  getInvByid(id:number){
    return this.httpclient.get<Inventory>(this.invUrl+"/getinv/"+id);
  }

}
