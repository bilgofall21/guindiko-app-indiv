import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './api-url.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Sousdomaine } from '../models/Sousdomaine';
import { Domaine } from '../models/Domaine';

@Injectable({
  providedIn: 'root'
})
export class SousDomaineService {

  constructor(private http:HttpClient) { }
  // Liste 
  getListeSousDomaines() : Observable<any>{
    return this.http.get<any>(`${url}/listerSousDomaine`);
  }
  // Récupérer les sous-domaines pour un domaine spécifique
  getSousDomaines(domaineId: string): Observable<Sousdomaine[]> {
    return this.http.get<Sousdomaine[]>(`${url}/domaine/listerSousDomaine/${domaineId}`);
  }

   // geteById
getById(id: string) 
{
  return this.http.get<Sousdomaine>(`${url}/afficherSousDomaine/`+ id).pipe(
    catchError(error => throwError(error.error.message))
  );
}
 // Ajout
 ajoutSousDomaine(sousdomaine : any, id: string) {
  return this.http.post<any>(`${url}/ajouterSousDomaine/${id}`, sousdomaine);
}

 // Mettre à jour un sous domaine existant
 updateSousDomaine( changes: any, id: string): Observable<any> {
  return this.http.patch<any>(`${url}/modifierSousDomaine/${id}`, changes);
}

edit(id: string, sousdomaine: Partial<Sousdomaine>): Observable<{ message: string }> {
  return this.http.patch<{ message: string }>(`${url}/modifierSousDomaine/${id}`, sousdomaine);
}

// Archiver un domaine en utilisant PATCH
archiveSousDomaine(id: string): Observable<any> {
  // const changes = { estArchive: true }; // Mettre à jour estArchive à true pour l'archivage
  return this.http.patch<any>(`${url}/supprimerSousDomaine/${id}`, {});
}
}
