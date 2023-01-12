import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderservicesService } from 'src/app/services/orderservices.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  addorderlist =new Order();
  //addorderlist.userid='user';
  constructor(private ordersev:OrderservicesService,private router:Router) { }

  ngOnInit(): void {
  }

  addOrder(){
    this.ordersev.addOrder(this.addorderlist).subscribe(
      data=>{
        this.router.navigate(['/orders'])
      },
      error=>console.log("error")
    )
  }

}
