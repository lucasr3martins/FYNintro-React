import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class IntroslideGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ):
    Promise<boolean>{
    const isComplete = await this.storage.get('introcomplete');

      if (!isComplete){
        this.router.navigateByUrl('/introslide');
      }

    return isComplete;
  }
}
