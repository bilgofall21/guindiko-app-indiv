import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { url } from './api-url.service';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private url="https://guindiko.mouhamadoufaye.tech/api"
  constructor(private http: HttpClient) { }
  // Liste
  getDemandes() : Observable<any>{
    return this.http.get<Demande[]>(`${this.url}/listerDemande`);
  }

   // geteById
getById(id: string)
{
  return this.http.get<Demande>(`${url}/listerDemande/`+ id).pipe(
    catchError(error => throwError(error.error.message))
  );
}
 // Ajout
ajoutDemande(Demande: Demande) {
  return this.http.post<{ message: string }>(`${url}/ajouterDemande`, Demande);
}

 // Mettre à jour un domaine existant
 updateDemande(id: string, changes: Partial<Demande>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierDemande/${id}`, changes);
}

// Modificacion
edit(id: string, Demande : Demande) {
  return this.http.put<{ message: string }>(`${url}/modifierDemande/` + id, Demande);
}

// Suppression
delete(id: string) {
  return this.http.delete<{ message: string }>(`${url}/supprimerDemande/` + id);
}
}
