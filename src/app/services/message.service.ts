import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  MessageService {
  private apiUrl = 'https://guindiko2.mouhamadoufaye.tech/api';

  constructor(private http: HttpClient) {}

  // Récupérer tous les messages
  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/messages`);
  }

  // Récupérer un message par son ID
  getMessageById(id: string): Observable<Message> {
    return this.http.get<Message>(`${this.apiUrl}/messages/${id}`);
  }

  // Ajouter un message
  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/messages`, message);
  }

  // Supprimer un message par son ID
  deleteMessage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/messages/${id}`);
  }
}

// Modèle de message (à définir selon vos besoins)
export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
}
