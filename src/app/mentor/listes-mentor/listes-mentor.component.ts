import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-listes-mentor',
  templateUrl: './listes-mentor.component.html',
  styleUrls: ['./listes-mentor.component.css']
})
export class ListesMentorComponent {
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
    },

  ];
  constructor(private userSER : UserService){};

  ngOnInit(): void {
    this.listerUser();
  }
datalistes : any;
  listerUser(){
    this.userSER.getAlls().subscribe((data : any)=>{
      console.log("data");
      console.log(data);
      this.datalistes = data;
    })
  };
  

  };

