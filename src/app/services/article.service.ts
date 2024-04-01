import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { Observable, catchError, throwError } from 'rxjs';
import { url } from './api-url.service';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles() : Observable<any>{
    return this.http.get<Article[]>(`${url}/listerArticle`);
  }

   // geteById
getById(id: string)
{
  return this.http.get<Article>(`${url}/listerArticle/`+ id).pipe(
    // catchError(error => throwError(error.error.message))
  );
}
 // Ajout
ajoutarticle(article: Article) {
  return this.http.post<any>(`${url}/ajouterArticle`, Article);
}

 // Mettre à jour un domaine existant
 updateArticle(id: string, changes: Partial<Article>): Observable<{ message: string }> {
  return this.http.put<{ message: string }>(`${url}/modifierArticle/${id}`, changes);
}

// Modificacion
edit(id: string, Article : Article) {
  return this.http.put<{ message: string }>(`${url}/modifierArticle/` + id, Article);
}

// Suppression
delete(id: any) {
  return this.http.patch<any>(`${url}/supprimerArticles/${id}`, {});
}

  constructor(private http : HttpClient) { }
  getAllArticles () : Observable <any> {
    return this.http.get<Article[]>(`${url}/listerArticles`)
  }
// methode pour ajouter article

  // Ajouter
  addArticles(article : any) {
    return this.http.post<any>(`${url}/ajouterArticle`, article);
  }


}
  // Ajout
  //  ajoutDomaine(domaine : Domaine) {
  //   return this.http.post<{ message: string }>(`${url}/ajouterDomaine`, domaine);


