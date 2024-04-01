import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject: Subject<string> = new Subject<string>();

  // Méthode pour émettre une notification
  sendNotification(message: string): void {
    this.notificationSubject.next(message);
  }

  // Méthode pour s'abonner aux notifications
  getNotifications(): Observable<string> {
    return this.notificationSubject.asObservable();
  }
}
