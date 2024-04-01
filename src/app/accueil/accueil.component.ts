import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
services : any []=[
  { id :1,
    titre: "Informatique",
    description : " Le mentorat en informatique, c’est bien plus qu’une profession, c’est une passerelle vers l’excellence numérique. En tant que mentor en informatique, ....",
    imageUrl : "https://img.freepik.com/photos-gratuite/puce-informatique-connecte-composants-electriques-alimentant-industrie-mondiale-communications-generee-par-intelligence-artificielle_24877-80915.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  },
  {
    id :2,
    titre: "Gestion et Management",
    description : "Le mentorat en gestion est une profession dédiée à façonner les futurs leaders et à renforcer les compétences en gestion. En tant que mentor en gestion, vous partagez votre expérience et vos connaissances pour guider ...",
    imageUrl : "https://img.freepik.com/photos-gratuite/vue-dessusvue-dessus-du-gestionnaire-employe-faisant-travail-equipe-dans-bureau-affaires-regardant-graphiques-ecran-ordinateur-portable_482257-2443.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  },
  {
    id :3,
    titre: "Technique",
    description : "Le mentorat en technique est une opportunité de partager une expertise technique précieuse avec ceux qui cherchent à maîtriser les aspects pratiques et les compétences essentielles de divers domaines techniques.",
    imageUrl : "https://img.freepik.com/photos-gratuite/image-objets-ingenierie-point-vue-du-lieu-travail-concept-construction-outils-ingenierie-effet-filtre-retro-tonalite-tension-mise-au-point-douce-mise-au-point-selective_1418-474.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  }
];

articles : any []=[
  {
    id :1,
    titreArticle: "L'IA nouveau moteur du numérique",
    Domaine : "Inteligence artificielle",
    auteurArticle : "Marie Laure Coly",
    dateArticle : "08/12/2023",
    description : "L'intelligence artificielle (IA) se réfère à la simulation de processus intelligents chez les machines, permettant à celles-ci d'effectu",
    imageArticle : "https://img.freepik.com/vecteurs-libre/illustration-concept-innovation_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  },
  {
    id :2,
    titreArticle: "Les Hackeurs deviennent incontrolable",
    Domaine : " Cyber Securité",
    auteurArticle : "Astou diouf",
    dateArticle : "08/12/2023",
    description : " Ces hackers poursuivent des objectifs politiques ou sociaux en utilisant des techniques de piratage. Leur motivation est souvent liée à des convictions idéologiques,",
    imageArticle : "https://img.freepik.com/vecteurs-libre/voler-concept-cyberattaque-donnees_23-2148535004.jpg?size=626&ext=jpg&ga=GA1.1.2145246215.1689776414&semt=sph"
  }

]

}
