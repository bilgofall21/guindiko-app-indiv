import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  router: any;
  constructor(private http : HttpClient,
              private auth : AuthService,
              private route : Router
                                            ) {}

  // methode qui gere le guard et redirige vers le page loguin
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuth$.pipe(
      take(1),
      tap(auth => { //auth est true ou false c la val de isAuth$ ki est un observable en quelque sorte
        if (!auth) {
          this.router.navigate(['/accueil']);
        }
      })
    );
  }
}
