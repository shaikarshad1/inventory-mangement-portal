import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { AddeventsComponent } from './components/addstudent/addstudent.component';
import { AddplayerComponent } from './components/addcourse/addcourse.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventlistComponent } from './components/studentlist/studentlist.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerlistComponent } from './components/courselist/courselist.component';
import { SearchEventsComponent } from './components/searchStudent/search-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { RoleGuardGuard } from 'src/services/role-guard.guard';

const routes: Routes = [
  {path:'',
  component:HomeComponent,
  pathMatch:'full'},

  { path:'student/:id',
  component:UpdateStudentComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }},
  
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
},
{
  path:'courselist',
  component:PlayerlistComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},

{
  path:'student',
  component:EventlistComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }
},
{
  path:'addstudent',
  component:AddeventsComponent,
  pathMatch:'full',
  canActivate:[AuthGuard]
},
{
  path:'searchstudent',
  component:SearchEventsComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }
},
{
  path:'addCourse',
  component:AddplayerComponent,
  pathMatch:'full',
  canActivate:[AuthGuard,RoleGuardGuard],
  data:{
    expectedRoles:'admin'
  }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
