import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
// Déclaration des variables pour stocker les valeurs des champs
  nomUtilisateur: string = '';
  email: string = '';
  message: string = '';

  // Méthode pour vérifier les champs et afficher le SweetAlert2
  verifierChamps() {
    // Vérifier si les champs sont vides
    if (!this.nomUtilisateur || !this.email || !this.message) {
      this.afficherMessage('Erreur', 'Veuillez remplir tous les champs', 'error');
      return;
    }

    // Vérifier si l'email appartient au nom d'utilisateur
    // if (!this.email.includes(this.nomUtilisateur)) {
    //   this.afficherMessage('Erreur', "L'e-mail doit appartenir au nom d'utilisateur", 'error');
    //   return;
    // }

    // Toutes les vérifications sont passées, afficher un message de succès
    this.afficherMessage('Succès', 'Formulaire soumis avec succès', 'success');
  }

  // Méthode pour afficher un sweetalert2
  afficherMessage(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  //  // Méthode pour afficher un sweetalert2 apres vérification
  //  verifierChamps(title:any, text:any, icon:any) {
  //   Swal.fire({
  //     title: title,
  //     text: text,
  //     icon: icon
  //   });
  // }
}
