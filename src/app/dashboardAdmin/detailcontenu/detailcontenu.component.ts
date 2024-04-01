import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomaineService } from 'src/app/services/domaine.service';
import { ActivatedRoute } from '@angular/router';
import { SousDomaineService } from 'src/app/services/sous-domaine.service';
import { Sousdomaine } from 'src/app/models/Sousdomaine';
import Swal from 'sweetalert2';
import { url } from 'src/app/services/api-url.service';

@Component({
  selector: 'app-detailcontenu',
  templateUrl: './detailcontenu.component.html',
  styleUrls: ['./detailcontenu.component.css']
})
export class DetailcontenuComponent implements OnInit{
  detailContenu:any;
  listeSousDomaines:any;
  
  nomSousD:string="";
  descripSousD:string="";
   // Déclaration de domaineId en tant que variable de classe
   domaineId: string = '';
   nomSousDomaine : string = "";
   description : string = "";
   domaine_id : string = "";
   image: string = "";

  sousdomaine :Sousdomaine={
    id: '',
    nomSousDomaine: '',
    image: new File([], 'example.jpg'),
    description: '',
    createdAt: '',
    estArchive: false,
    updatedAt: '',
    createdBy: '',
    updatedBy: ''
  }

  constructor(
    private domaineService: DomaineService,
    private sousdomaineService: SousDomaineService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    const domaineId = this.route.snapshot.paramMap.get('id');
  

    this.allSousDomaine();
    this.allDomaine();
    this.getDomaineById();

  }

  // Méthode pour récupérer les sous-domaines spécifiques à un domaine


      // Sweetalert
  showAlert(title:any, text:any, icon:any){
    Swal.fire({
      title:title,
      text:text,
      icon:icon
    })
  }

  viderChapms(){
    this.nomSousD = "",
    this.descripSousD = ""
  }

  addSousDomaine() {
    // Utilisation de this.domaineId dans la méthode addSousDomaine()
    this.sousdomaineService.ajoutSousDomaine(this.mapToDomaine(), this.domaineId).subscribe((data: any) => {
      this.showAlert("Félicitation", "Sous domaine ajouté avec succès", "success");
      this.viderChapms();
      console.log(this.domaineId);
      // console.log(this.sousdomaine);
    });
  }
  mapToDomaine(): Sousdomaine {
    // Crée une nouvelle instance de Domaine en utilisant l'instance existante
    const sousdomaine: Sousdomaine = this.sousdomaine;
    sousdomaine.nomSousDomaine = this.nomSousD;
    sousdomaine.description = this.descripSousD;    
    return this.sousdomaine;
  }
  domaineData : any[] = [];
  allDomaine(): void {
    this.domaineService.getDomaines().subscribe((data)=>{
      console.log("tous les domaine", data);
      this.domaineData = data;
      console.log("nouveau domaine", this.domaineData)
    })
  }
  dataDomaine : any ;
  getDomaineById(): void {
    this.domaineService.getById(this.route.snapshot.params['id']).subscribe((data)=>{
      this.dataDomaine = data;
      console.log("voir donnée domaine specifique", this.dataDomaine)
    })
  }
  ajouterSousDomaine():  void{
  
    let formData = new FormData();
    formData.append('nomSousDomaine', this.nomSousDomaine),
    formData.append('description', this.description),
    // formData.append('domaine_id', this.domaine_id),
    formData.append('image', this.image)
    const newSDomaine = {
      nomSousDomaine : this.nomSousDomaine,
      description : this.description,
      image : this.image,
      domaine_id : this.domaine_id
    }


    this.sousdomaineService.ajoutSousDomaine(formData, this.route.snapshot.params['id']).subscribe((respons)=>{
      console.log("voir ajout sous domaine",respons)
      this.allSousDomaine();
    })
  }
  sousDomaineSelected : any;
  chargersousDomaine(element : any): void {
    this.sousDomaineSelected = element.id;
    this.nomSousDomaine = element.nomSousDomaine;
    this.description = element.description;
    this.domaine_id = element.domaine_id;
    this.image = element.image
  }

  modifierSousDomaine(): void {
    const newSouDomaine = {
      nomSousDomaine : this.nomSousDomaine,
      description : this.description,
      image : this.image
    }
    this.sousdomaineService.updateSousDomaine(newSouDomaine, this.sousDomaineSelected).subscribe((respons)=>{
      console.log("voir etat modification", respons);
      this.allSousDomaine();
    })
  }
deleteSousDomaine(id : string): void{
  this.sousdomaineService.archiveSousDomaine(id).subscribe((respons)=>{
    console.log("etat de la ,suppression", respons);
    this.allSousDomaine();
  })
}

  allSousDomaine(): void{
    this.sousdomaineService.getSousDomaines(this.route.snapshot.params['id']).subscribe((data)=>{
      this.listeSousDomaines = data;
      const sousDomainenoArchive = this.listeSousDomaines.filter((element:{estArchive : any})=> element.estArchive == 0 )
      this.listeSousDomaines = sousDomainenoArchive;
      console.log("liste des sous domaine", this.listeSousDomaines)
    })
  }
  // getFile(event: any) {
  //   console.warn(event.target.files[0]);
  //   this.image= event.target.files[0] as File ;
  // }
}
