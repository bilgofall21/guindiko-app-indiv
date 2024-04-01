import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../models/Commentaire';
import { Observable, catchError, throwError } from 'rxjs';
import { url } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http:HttpClient) { }
  // Liste
  getCommentaires() : Observable<any>{
    return this.http.get<Commentaire[]>(`${url}/listerCommentaire`);
  }

   // geteById
getById(id: string)
{
  return this.http.get<Commentaire>(`${url}/listerCommentaire/`+ id).pipe(
    // catchError(error => throwError(error.error.message))
  );
}
 // Ajout
ajoutCommentaire(commentaire: Commentaire) {
  return this.http.post<{ message: string }>(`${url}/ajouterCommentaire`, commentaire);
}

 // Mettre à jour un domaine existant
 updateCommentaire(id: string, changes: Partial<Commentaire>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierCommentaire/${id}`, changes);
}

// Modificacion
edit(id: string, Commentaire : Commentaire) {
  return this.http.put<{ message: string }>(`${url}/modifierCommentaire/` + id, Commentaire);
}

// Suppression
delete(id: string) {
  return this.http.delete<{ message: string }>(`${url}/supprimerCommentaire/` + id);
}

}
