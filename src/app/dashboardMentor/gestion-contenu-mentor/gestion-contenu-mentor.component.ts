import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { DomaineService } from 'src/app/services/domaine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenu-mentor',
  templateUrl: './gestion-contenu-mentor.component.html',
  styleUrls: ['./gestion-contenu-mentor.component.css']
})
export class GestionContenuMentorComponent {
domaine_id: string ="";
titre: string = "";
contenu: string = "";
  image!: File;
domaine: string = "";
getArticlesPage(): any {
throw new Error('Method not implemented.');
}
  ngOnInit(): void {
    this.allArticle();
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);

   
    this.allDomaine();
  }

  //  methode pour sweet alerte



  nom:string="";
  descrip:string="";
  domain : string = "";
  
  article : Article ={
      id: "",
      titre: "",
      domaine : "",
      contenu: "",
      image: "",
      nombreClique: 0,
      createdAt: "",
      updatedAt: "",
      createdBy: "",
      updatedBy: "",

  }

  showAlert(title:any, text:any, icon:any){
    Swal.fire({
      title:title,
      text:text,
      icon:icon
    })
  }

  // Méthode pour vider les champs
    // Methode pour vider les champs
    viderChapms(){
      this.nom = "",
      this.descrip = "",
      this.domain = ""
    }

  constructor(private articleService : ArticleService,
              private authen : AuthService,
              private router : Router,
              private domaineservice : DomaineService
    ) {
  }
  listeArticles : any
  allArticle(): void {
    this.articleService.getAllArticles().subscribe((data)=>{
      // this.listeArticles =data;
      // console.log("voir les articles", data);
      this.listeArticles = data.filter((element: {estArchive : any }) => element.estArchive == 0 );
    })
  }

  domaines : any
  allDomaine(): void {
    this.domaineservice.getDomaines().subscribe((data)=>{
      this.domaines = data;
      console.log("voir domaine", this.domaines);

    })
  }
  ajouArticle(): void {
    let formData = new FormData();
    formData.append('titre',this.titre);
    formData.append('contenu', this.contenu);
    formData.append('domaine', this.domaine);
    formData.append('image', this.image);
    this.articleService.addArticles(formData).subscribe((respons)=>{
      console.log("etat de l'ajout ", respons);
      this.allArticle();
    })
  }

  selectedArticle : any;
  chargerArticle(element : any): void {
    this.selectedArticle = element.id;
    this.titre = element.titre;
    this.contenu = element.contenu;
    this.domaine = element.domaine;
    this.image = element.image
  }

  supprimerArticle(id :  any): void {
    this.articleService.delete(id).subscribe((respons)=>{
      console.log("article supprime", respons);
      this.allArticle();

    })
  }
  logOut(): void{
    this.authen.deconection().subscribe((response) =>{
console.log("etat deconnexion", response);
localStorage.removeItem('samaToken'),
this.router.navigate(['./login'])

    })
  }
    getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image= event.target.files[0] as File ;
  }
}




// addDomaine(){
//   this.domaineService.ajoutDomaine(this.mapToDomaine()).subscribe((data: any) =>{
//   })
//   this.showAlert("Félicitation","Domaine ajouté avec succes","success")
//   this.viderChapms()
// }





