import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryservicesService } from 'src/app/services/inventoryservices.service';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventorylistComponent implements OnInit {

  inventorylist:any;
  toggleButton:boolean=false;
  noDataDisplay='';

  

  constructor(private invserv:InventoryservicesService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userName')=='admin'){
      this.toggleButton=true
    }
    this.invserv.getAllInv().subscribe(
      (data) => {
        
        this.inventorylist=data;
        
      },
      error => console.log("error")
    );
    }

  

  updateInv(id:number){

    this.router.navigate(['/inventory',id])
  }

  addOrder(){}

}
