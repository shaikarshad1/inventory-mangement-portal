import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderservicesService } from 'src/app/services/orderservices.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  toggleButton:boolean=false;
  orderlist:any;
  noDataDisplay='';
  userid:string|null=''

  constructor(private orderserv:OrderservicesService,private router:Router) { }

  ngOnInit(): void {
    
    this.userid=localStorage.getItem('userName')
    console.log(this.userid,'sss',localStorage.getItem('userid'))
    if(this.userid!='admin'){
    this.orderserv.getOrderByUserId(this.userid ).subscribe(
      data=>{this.orderlist=data},
      error=>console.log("error")
    );
  }
  if(this.userid=='admin'){
    this.orderserv.getAllOrders().subscribe(
      data=>{this.orderlist=data
      this.toggleButton=true},
      error=>console.log("error")
    );
  }
    console.log(localStorage.getItem('password')+"jjkjkj")
  }
  updateOrder(id:number){
    this.router.navigate(['/order',id])
  }

}
