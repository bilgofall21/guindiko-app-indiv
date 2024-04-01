import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-profil-mentor',
  templateUrl: './gestion-profil-mentor.component.html',
  styleUrls: ['./gestion-profil-mentor.component.css']
})
export class GestionProfilMentorComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
