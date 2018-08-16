import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Router, 
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGarud implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private route: Router
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if(authenticated){
            return true;
          }else{
            this.route.navigate(['/']);
          }
        }
      );
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
  }
}
