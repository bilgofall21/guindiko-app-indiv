import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diplome } from '../models/Diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {
  private apiUrl = 'https://guindiko2.mouhamadoufaye.tech/api';

  constructor(private http: HttpClient) { }

  getDiplomes(): Observable<Diplome[]> {
    return this.http.get<Diplome[]>(`${this.apiUrl}/diplomes`);
  }

  getDiplomeById(id: string): Observable<Diplome> {
    return this.http.get<Diplome>(`${this.apiUrl}/diplomes/${id}`);
  }

  addDiplome(diplomeData: Diplome): Observable<Diplome> {
    return this.http.post<Diplome>(`${this.apiUrl}/diplomes`, diplomeData);
  }

  updateDiplome(id: string, diplomeData: Diplome): Observable<Diplome> {
    return this.http.put<Diplome>(`${this.apiUrl}/diplomes/${id}`, diplomeData);
  }

  deleteDiplome(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/diplomes/${id}`);
  }
}
