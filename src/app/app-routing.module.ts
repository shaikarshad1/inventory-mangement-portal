import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RoleGuardGuard } from 'src/services/role-guard.guard';
import { AddorderComponent } from './components/addorder/addorder.component';
import { RegisterComponent } from './components/register/register.component';
import { AddinventoryComponent } from './components/addinventory/addinventory.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { InventorylistComponent } from './components/inventorylist/inventorylist.component';
import { UpdateinventoryComponent } from './components/updateinventory/updateinventory.component';
import { UpdateorderComponent } from './components/updateorder/updateorder.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  pathMatch:'full'},

  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },

  {path:'addOrder',
    component:AddorderComponent,
  pathMatch:'full',
canActivate:[AuthGuard]},

{
  path:'addInventory',
  component:AddinventoryComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }
},

{
  path:'orders',
  component:OrderlistComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},

{
  path:'inventories',
  pathMatch:'full',
  component:InventorylistComponent,
  canActivate:[AuthGuard]
},

{
  path:'inventory/:id',
  component:UpdateinventoryComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }

},
{
  path:'order/:id',
  component:UpdateorderComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }
},





  
  
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'dashboard',
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
