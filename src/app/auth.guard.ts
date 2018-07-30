import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetInvoceDataService } from './get-invoce-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth:GetInvoceDataService, private myRoute:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggednIn()){
        var isOnline :boolean = true;
        return true;
      }else{
        var isOffline :boolean = false;
        this.myRoute.navigate(["login"]);
        return false;
      }
  }
}
