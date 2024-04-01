import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent {
  recupArticle: any;
  // Attribut pour la pagination
  articlesParPage = 10; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
  }

    // Méthode pour déterminer les articles à afficher sur la page actuelle
    getArticlesPage(): any[] {
      const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
      const indexFin = indexDebut + this.articlesParPage;
      return this.recupArticle.slice(indexDebut, indexFin);
    }
     // Méthode pour générer la liste des pages
     get pages(): number[] {
      const totalPages = Math.ceil(this.recupArticle.length / this.articlesParPage);
      return Array(totalPages).fill(0).map((_, index) => index + 1);
    }
  
    // Méthode pour obtenir le nombre total de pages
    get totalPages(): number {
      return Math.ceil(this.recupArticle.length / this.articlesParPage);
    }
}
