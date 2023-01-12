import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/model/inventory';
import { InventoryservicesService } from 'src/app/services/inventoryservices.service';

@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})
export class UpdateinventoryComponent implements OnInit {
  updateinvlist=new Inventory();
  id!:number;

  constructor(private invserv:InventoryservicesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.invserv.getInvByid(this.id).subscribe(
      (data)=>{
        this.updateinvlist=data
      },
      error=>console.log("error")
    );
  }

  updateInventory(){
    this.invserv.upadteInvByid(this.updateinvlist,this.id).subscribe(
      data=>{
        this.router.navigate(['/inventories'])
      }
    );
    
  }

}
