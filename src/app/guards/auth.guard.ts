//import { CanActivateFn } from '@angular/router';

//export const authGuard: CanActivateFn = (route, state) => {
  
//};
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.auth.isLoggedIn();
  }
}