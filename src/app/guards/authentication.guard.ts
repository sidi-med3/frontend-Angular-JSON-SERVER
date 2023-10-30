import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {AppStateService} from "../services/app-state.service";
@Injectable({
  providedIn:'root'
})
export class authenticationGuard {
  constructor(private appStateService:AppStateService,
              private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.appStateService.authState.isAuthenticated){
      return true
    }else {
      this.router.navigateByUrl("/login")
      return false
    }

  }

}
