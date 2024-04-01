import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-demande',
  templateUrl: './gestion-demande.component.html',
  styleUrls: ['./gestion-demande.component.css']
})
export class GestionDemandeComponent {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }
  


}
