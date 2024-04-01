import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from 'src/app/models/Domaine';
import { AuthService } from 'src/app/services/auth.service';
import { DomaineService } from 'src/app/services/domaine.service';
// import { Domaine } from 'src/app/models/domaine.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
    this.getDomaines();
  }

  listeDomaines: Domaine[] = []; // Initialisez la liste des domaines avec une valeur par défaut vide

  constructor(private domaineService: DomaineService, private authenservice : AuthService,  private router : Router) { }


  // ...

  getDomaines(): void {
    this.domaineService.getDomaines().subscribe(
      (data: Domaine[]) => {
        this.listeDomaines = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des domaines', error);
      }
    );
  }


  // Fonction sweet alert
  verifInfos(title: any, text: any, icon: any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  // Fonction pour bloquer un utilisateur
  blockUser(){
    this.verifInfos("Félicitation","Utilisateur bloqué avec succès","success")
  }

  // methood epour deconnction
  logout (): void {
    this.authenservice.deconection().subscribe((respons) =>{
      console.log("voir deconnection", respons)
      localStorage.removeItem('samaToken'),
      this.router.navigate(['/login']);
    })
  }

}
