import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../models/User';
import { url } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setUserId(id: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private http : HttpClient,  private  router : Router){}

    // creation des variables super global et variable token
    isAuth$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
    isAdmin$ = new BehaviorSubject<boolean>(false); //var super globale initialisé à false permet de savoir si user est auth ou pas
    private authToken = '';

    // methode pour crere utilisateur
    createUser(user: User, image: File): Observable<{ message: string }> {
      // const formData = new FormData();
      // formData.append('user', JSON.stringify(user));
      // formData.append('image', image);

      return this.http.post<{ message: string }>(`${url}/register`, user);
    }

    // methode token a appeler lorsque ce dernier ne serait plus vide
    getToken(): string {
      return this.authToken;
    }

    // methode pour se connecter

    // loginUser(email: string, password: string) : Observable<{ userId: string; token: string }> {
    loginUser(user : any) : Observable<any> {
      return this.http.post<User>(`${url}/login`,user).pipe(
        map(respons => {
        return respons  
        }),
        catchError(error =>{
          console.error('Une erreur s\est produite lors de la connexion', error);
          return throwError(error);
        })
      );

    }

    // methode pour s'inscrire

    registerUser(registrationData: any): Observable<any> {
      return this.http.post<any>(`${url}/register`, registrationData);
    }


    // methode pour se deconnecter
    logout(): void {
      // this.authToken = '';
      // this.userId = '';
      this.isAuth$.next(false);
      this.isAdmin$.next(false);
      this.router.navigate(['accueil']);
  }

  deconection ():Observable<any> {
    return this.http.get<any>(`${url}/logout`)
  }
}


