import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderservicesService } from 'src/app/services/orderservices.service';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {

  updateorderlist=new Order();

  constructor(private orderserv:OrderservicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderserv.getOrdernyID(this.route.snapshot.params['id']).subscribe(
      data=>this.updateorderlist=data
    )
  }

  updateOrder(){
    this.orderserv.editOrder(this.updateorderlist,this.route.snapshot.params['id']).subscribe(
      data=>this.router.navigate(['/orders']),
      error=>console.log("error")
    )
   
  }

}
