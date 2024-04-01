import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, catchError, switchMap, tap } from 'rxjs';
import { Domaine } from 'src/app/models/Domaine';
import { DomaineService } from 'src/app/services/domaine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-contenu',
  templateUrl: './gestion-contenu.component.html',
  styleUrls: ['./gestion-contenu.component.css']
})
export class GestionContenuComponent {

  listeDomaines!: any;
  nom:string="";
  descrip:string="";
  image!: any;
  nomDomaine: string = "";
  description: string = ""
  domaine :Domaine={
    id: '',
    nomDomaine: '',
    image: new File([], 'example.jpg'),
    description: '',
    createdAt: '',
    estArchive: false,
    updatedAt: '',
    createdBy: '',
    updatedBy: ''
  }

    // Attribut pour la pagination
    articlesParPage = 3; // Nombre d'articles par page
    pageActuelle = 1; // Page actuelle

    // Attribut pour la recherche
    filterValue='';
    filteredElement:any;

    idDomaineAModifier : any;

    constructor(
      private domaineService: DomaineService,
      private http : HttpClient,
      private route: ActivatedRoute,){}

    ngOnInit(): void {
      const script = document.createElement('script');
      script.src = '../../../assets/js/script.js';
      document.body.appendChild(script);

      // pour récupérer les domaies stockés
      this.getDomaines();
  }

  // Sweetalert
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
      this.descrip = ""
    }

  // Méthode pour récupérer les données
   getDomaines(): void {
    this.domaineService.getDomaines().subscribe(
      (data: Domaine[]) => {
        this.listeDomaines = data;
        console.log("donnee recuperer", data)
      },
      (error) => {
        console.error('Erreur lors de la récupération des domaines', error);
      }
    );
  }

  // Méthode pour ajouter un domaine
  addDomaine(){
    this.domaineService.ajoutDomaine(this.mapToDomaine()).subscribe((data: any) =>{
    })
    this.showAlert("Félicitation","Domaine ajouté avec succes","success")
    this.viderChapms()
  }

  mapToDomaine(): Domaine {
    // Crée une nouvelle instance de Domaine en utilisant l'instance existante
    const domaine: Domaine = this.domaine;
    domaine.nomDomaine = this.nom;
    domaine.description = this.descrip;
    return this.domaine;
  }

  // Variable pour stocker le domaine cliqué
  currentDomaine:any

    // Méthode pour charger les infos du contact à modifier
    chargerInfosDomaine(paramDomaine:any){
      this.idDomaineAModifier = paramDomaine.id;
      // this.idDomaineASupprimer = paramDomaine.id;
      this.currentDomaine =paramDomaine ;
      this.nom=paramDomaine.nomDomaine;
      this.descrip = paramDomaine.description;;
    }

  // Méthode pour supprimer un domaine spécifique
  supprimerDomaine(idDomaineASupprimer : any) {

    const domaineToEdit = this.listeDomaines.find((domaine: any) => domaine.id === idDomaineASupprimer);
    if (domaineToEdit) {
      console.log("object");
      console.log(domaineToEdit);
      // Autres actions à effectuer
      this.domaineService.archiveDomaine(domaineToEdit.id).subscribe(
        () => {
          this.showAlert("Service supprimé", "", "success");
          this.getDomaines();
        },
        (error) => {
          console.error('Erreur lors de la suppression du service', error);
          this.showAlert("Erreur", "Une erreur s'est produite lors de la suppression du service", "error");
        }
      );
    }
  }

modifierDomaine() {
  const domaineToEdit = this.listeDomaines.find((domaine: any) => domaine.id == this.idDomaineAModifier);

  if (domaineToEdit) {
    domaineToEdit.nomDomaine = this.nom;
    domaineToEdit.description = this.descrip;

    console.log("Domaine à modifier");
    console.log(domaineToEdit);
    this.domaineService.edit(this.idDomaineAModifier, { nomDomaine: this.nom, description: this.descrip }).subscribe(
      () => {
        this.showAlert("Domaine modifié", "", "success");
        this.getDomaines(); // Mettre à jour la liste des domaines après modification
      },
      (error) => {
        console.error('Erreur lors de la modification du domaine', error);
        this.showAlert("Erreur", "Une erreur s'est produite lors de la modification du domaine", "error");
      }
    );
  } else {
    console.error('Domaine non trouvé pour la modification');
  }
}

domaineSelected : any;
chargerElemnt(domaine : any): void{
  this.domaineSelected = domaine.id;
  console.log("id selectionner", this.domaineSelected)
  this.nomDomaine = domaine.nomDomaine;
  this.description = domaine.description;
  this.image = domaine.image 

}

updateDomaine(): void {
const newDomaine = {
  nomDomaine : this.nomDomaine,
  description : this.description,
  image : this.image,
}
  this.domaineService.edit(this.domaineSelected, newDomaine).subscribe((respons)=>{
    console.log("Etat de la modification", respons);
    this.getDomaines();
  })
}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}
ajoutDomaine () : void {

  let formData =  new FormData();
  formData.append('nomDomaine', this.nomDomaine);
  formData.append('description', this.description);
  formData.append('image', this.image)
  console.log("donne saisie", formData)
  this.domaineService.ajoutDomaine(formData).subscribe((respons) =>{
    console.log("donnee ajoutee", respons)
    this.getDomaines();
  })
}



      getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.listeDomaines.slice(indexDebut, indexFin);
  }
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.listeDomaines.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.listeDomaines.length / this.articlesParPage);
  }

  // Méthode pour effectuer la recherche basée sur le nom (titre) du domaine
  onSearch() {
    if (this.filterValue.trim() !== '') {
      this.filteredElement = this.listeDomaines.filter(
        (elt: any) => elt?.nomDomaine.toLowerCase().includes(this.filterValue.toLowerCase())
      );
      // Mettre à jour la liste des domaines filtrés
      this.listeDomaines = this.filteredElement;
    } else {
      // Si la barre de recherche est vide, réinitialiser la liste des domaines à sa valeur initiale
      this.getDomaines();
    }
  }

}
