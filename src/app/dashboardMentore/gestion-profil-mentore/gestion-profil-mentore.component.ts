import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-profil-mentore',
  templateUrl: './gestion-profil-mentore.component.html',
  styleUrls: ['./gestion-profil-mentore.component.css']
})
export class GestionProfilMentoreComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
