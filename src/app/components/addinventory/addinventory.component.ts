import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/model/inventory';
import { InventoryservicesService } from 'src/app/services/inventoryservices.service';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {

  addinvlist=new Inventory();

  constructor(private invserv:InventoryservicesService,private route:Router) { }

  ngOnInit(): void {
  }

  addInventory(){
    this.invserv.addInventory(this.addinvlist).subscribe(
      data=>{
        this.route.navigate(['/inventories'])
      },
      error => console.log("error")
    );
  }

}
