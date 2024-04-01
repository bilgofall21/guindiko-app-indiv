import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'https://guindiko2.mouhamadoufaye.tech/api';

  constructor(private http: HttpClient) { }

  submitEvaluation(evaluationData: Evaluation): Observable<Evaluation> {
    return this.http.post<Evaluation>(`${this.apiUrl}/evaluation`, evaluationData);
  }
}
