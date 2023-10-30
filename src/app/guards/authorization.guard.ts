import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn, Router,
  RouterState,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AppStateService} from "../services/app-state.service";

@Injectable({
  providedIn:'root'
})
export class authorizationGuard implements  CanActivate {
  constructor(private  appStateService :AppStateService,
              private route:Router) {
  }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    // if (this.appStateService.authState.roles.includes('ADMIN')){
    if(this.appStateService.authState.roles.includes(route.data['requiredRoles'])){
      return true
    } else {
      this.route.navigateByUrl('/admin/notAuthorized')
      return false
    }

   // return (this.appStateService.authState.isAuthenticated == true);

  }

}
