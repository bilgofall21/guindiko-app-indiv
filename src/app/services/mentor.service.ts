import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../models/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private apiUrl = 'https://example.com/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.apiUrl}/mentors`);
  }

  getMentorById(id: string): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiUrl}/mentors/${id}`);
  }

  addMentor(mentorData: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`${this.apiUrl}/mentors`, mentorData);
  }

  updateMentor(id: string, mentorData: Mentor): Observable<Mentor> {
    return this.http.put<Mentor>(`${this.apiUrl}/mentors/${id}`, mentorData);
  }

  deleteMentor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/mentors/${id}`);
  }
}

