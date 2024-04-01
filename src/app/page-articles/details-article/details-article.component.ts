import { Component } from '@angular/core';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {
detailArticles : any[]= [
  {
    id :1,
    titreArticle: "Les Hackeurs deviennent incontrolable",
    Domaine : " Cyber Securité",
    auteurArticle : "Astou diouf",
    dateArticle : "08/12/2023",
    description : " Ces hackers poursuivent des objectifs politiques ou sociaux en utilisant des techniques de piratage. Leur motivation est souvent liée à des convictions idéologiques,",
    imageArticle : "https://img.freepik.com/vecteurs-libre/voler-concept-cyberattaque-donnees_23-2148535004.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph",
    contenueArticle : " Alors que les entreprises reconnaissent ces menaces et consacrent des ressources à leur défense, des pirates inventifs ont montré qu'ils continueront à trouver des moyens de contourner les mesures de sécurité. Et tant que les entreprises continueront à collecter des trésors de données personnelles non chiffrées, les pirates seront motivés pour continuer à trouver d'autres moyens pour les obtenir » complète le rapport, avant de conclure : « C'est pourquoi il est impératif que les entreprises envisagent de limiter la quantité de données personnelles qu'elles stockent dans un format lisible, tout en s'efforçant de protéger les données sensibles des consommateurs qu'elles stockent ». Un moyen pour Apple de mettre en avant ses différents avantages : chiffrement de bout en bout et protection avancée des données d'iCloud « afin de réduire la quantité de données vulnérables stockées par les entreprises et le risque pour les individus"
  },
]
}
