import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  userNameDisplay!:string | null;
  
  constructor(private loginservice:LoginserviceService){}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthrized(route);
  }
  

  isAuthrized(route: ActivatedRouteSnapshot):boolean{
    
    this.userNameDisplay=localStorage.getItem('userName');
    
    console.log('======1'+this.userNameDisplay);
    const expectedRoles=route.data['expectedRoles'];
    console.log('======2'+expectedRoles);
    return this.userNameDisplay==expectedRoles ? true:false;
  }
}
