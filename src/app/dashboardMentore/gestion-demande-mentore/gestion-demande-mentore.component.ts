import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-demande-mentore',
  templateUrl: './gestion-demande-mentore.component.html',
  styleUrls: ['./gestion-demande-mentore.component.css']
})
export class GestionDemandeMentoreComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
}
